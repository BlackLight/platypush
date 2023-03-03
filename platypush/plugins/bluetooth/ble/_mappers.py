import json
import struct
from dataclasses import dataclass, field
from typing import Any, Callable, Dict, Optional

from bleak.backends.device import BLEDevice
from bleak.backends.scanner import AdvertisementData
from bleak.uuids import uuidstr_to_str
from bluetooth_numbers import company

# pylint: disable=no-name-in-module
from TheengsGateway._decoder import decodeBLE, getAttribute, getProperties

from platypush.entities import Entity
from platypush.entities.batteries import Battery
from platypush.entities.bluetooth import BluetoothDevice
from platypush.entities.contact import ContactSensor
from platypush.entities.electricity import (
    CurrentSensor,
    EnergySensor,
    PowerSensor,
    VoltageSensor,
)
from platypush.entities.heart import HeartRateSensor
from platypush.entities.humidity import DewPointSensor, HumiditySensor
from platypush.entities.illuminance import IlluminanceSensor
from platypush.entities.motion import MotionSensor
from platypush.entities.presence import PresenceSensor
from platypush.entities.pressure import PressureSensor
from platypush.entities.sensors import BinarySensor, NumericSensor, RawSensor
from platypush.entities.steps import StepsSensor
from platypush.entities.temperature import TemperatureSensor
from platypush.entities.time import TimeDurationSensor
from platypush.entities.weight import WeightSensor


@dataclass
class TheengsEntity:
    """
    Utility class to store the data parsed from the Theengs library.
    """

    data: dict = field(default_factory=dict)
    properties: dict = field(default_factory=dict)
    brand: Optional[str] = None
    model: Optional[str] = None
    model_id: Optional[str] = None


# pylint: disable=too-few-public-methods
class NullSensor:
    """
    Dummy class to model sensors with null values (hence without sufficient
    information for the application to infer the type).
    """

    def __init__(self, *_, **__):
        pass


# Maps property names to transformer methods (first mapper choice).
_property_to_entity: Dict[str, Callable[[Any, Dict[str, Any]], Entity]] = {
    'activity heart rate': lambda value, _: HeartRateSensor(value=value),
    'atmospheric pressure': lambda value, conf: PressureSensor(
        value=value,
        unit=conf.get('unit'),
    ),
    'battery': lambda value, conf: Battery(
        value=value,
        unit=conf.get('unit', '%'),
        min=conf.get('min', 0),
        max=conf.get('min', 100),
    ),
    'contact': lambda value, _: ContactSensor(value=value),
    'current': lambda value, conf: CurrentSensor(
        value=value,
        unit=conf.get('unit', 'A'),
    ),
    'dew_point_sensor': lambda value, conf: DewPointSensor(
        value=value,
        unit=conf.get('unit'),
    ),
    'duration': lambda value, conf: TimeDurationSensor(
        value=value,
        unit=conf.get('unit'),
    ),
    'energy': lambda value, conf: EnergySensor(
        value=value,
        unit=conf.get('unit', 'kWh'),
    ),
    'heart rate': lambda value, _: HeartRateSensor(value=value),
    'humidity': lambda value, conf: HumiditySensor(
        value=value,
        unit=conf.get('unit', '%'),
        min=conf.get('min', 0),
        max=conf.get('min', 100),
    ),
    'light level': lambda value, conf: IlluminanceSensor(
        value=value,
        unit=conf.get('unit'),
    ),
    'luminance': lambda value, conf: IlluminanceSensor(
        value=value,
        unit=conf.get('unit'),
    ),
    'moisture': lambda value, conf: HumiditySensor(
        value=value,
        unit=conf.get('unit'),
    ),
    'motion': lambda value, _: MotionSensor(value=value),
    'open': lambda value, _: BinarySensor(value=value),
    'power': lambda value, conf: PowerSensor(
        value=value,
        unit=conf.get('unit', 'W'),
    ),
    'presence': lambda value, _: PresenceSensor(value=value),
    'pressure': lambda value, conf: PressureSensor(
        value=value,
        unit=conf.get('unit'),
    ),
    'steps': lambda value, _: StepsSensor(value=value),
    'temperature': lambda value, conf: TemperatureSensor(
        value=value,
        unit=conf.get('unit', 'C'),
    ),
    'temperature2': lambda value, conf: TemperatureSensor(
        value=value,
        unit=conf.get('unit', 'C'),
    ),
    'temperature3': lambda value, conf: TemperatureSensor(
        value=value,
        unit=conf.get('unit', 'C'),
    ),
    'temperature4': lambda value, conf: TemperatureSensor(
        value=value,
        unit=conf.get('unit', 'C'),
    ),
    'temperature5': lambda value, conf: TemperatureSensor(
        value=value,
        unit=conf.get('unit', 'C'),
    ),
    'temperature6': lambda value, conf: TemperatureSensor(
        value=value,
        unit=conf.get('unit', 'C'),
    ),
    'temperature7': lambda value, conf: TemperatureSensor(
        value=value,
        unit=conf.get('unit', 'C'),
    ),
    'temperature8': lambda value, conf: TemperatureSensor(
        value=value,
        unit=conf.get('unit', 'C'),
    ),
    'volt': lambda value, conf: VoltageSensor(
        value=value,
        unit=conf.get('unit', 'V'),
    ),
    'voltage': lambda value, conf: VoltageSensor(
        value=value,
        unit=conf.get('unit', 'V'),
    ),
    'weight': lambda value, conf: WeightSensor(
        value=value,
        unit=conf.get('unit', 'kg'),
    ),
}

# Maps reported units to transformer methods (second mapper choice).
_unit_to_entity: Dict[str, Callable[[Any, Dict[str, Any]], Entity]] = {
    'status': lambda value, _: BinarySensor(value=value),
    'int': lambda value, conf: NumericSensor(
        value=value,
        unit=conf.get('unit'),
    ),
    'float': lambda value, conf: NumericSensor(
        value=value,
        unit=conf.get('unit'),
    ),
    '%': lambda value, conf: NumericSensor(
        value=value,
        unit='%',
        min=conf.get('min', 0),
        max=conf.get('min', 100),
    ),
}


# Maps value types to transformer methods (third mapper choice).
_value_type_to_entity: Dict[type, Callable[[Any, Dict[str, Any]], Entity]] = {
    bool: lambda value, _: BinarySensor(value=value),
    int: lambda value, conf: NumericSensor(value=value, unit=conf.get('unit')),
    float: lambda value, conf: NumericSensor(value=value, unit=conf.get('unit')),
    str: lambda value, conf: RawSensor(value=value, unit=conf.get('unit')),
    bytes: lambda value, _: RawSensor(value=value),
    bytearray: lambda value, _: RawSensor(value=value),
}


def device_to_entity(device: BLEDevice, data: AdvertisementData) -> BluetoothDevice:
    """
    Convert the data received from a Bluetooth advertisement packet into a
    compatible Platypush :class:`platypush.entity.bluetooth.BluetoothDevice`
    entity, with the discovered services and characteristics exposed as children
    entities.
    """

    theengs_entity = _parse_advertisement_data(data)
    parent_entity = BluetoothDevice(
        id=device.address,
        model=theengs_entity.model,
        brand=theengs_entity.brand,
        reachable=True,
        **parse_device_args(device),
    )

    parsed_entities = {
        # Check if we can infer an entity mapper from the property name.
        conf.get('name', name): _property_to_entity.get(
            conf.get('name'),
            # If not, check if we can infer an entity mapper from the reported unit.
            _unit_to_entity.get(
                conf.get('unit'),
                # If not, check if we can infer an entity mapper from the value type.
                _value_type_to_entity.get(
                    type(theengs_entity.data.get(name)),
                    # If not, default to a NullSensor.
                    lambda *_: NullSensor(),
                ),
            ),
        )(theengs_entity.data.get(name), conf)
        for name, conf in theengs_entity.properties.items()
    }

    for prop, entity in parsed_entities.items():
        if isinstance(entity, NullSensor):
            # Skip entities that we couldn't parse.
            continue

        entity.id = f'{parent_entity.id}:{prop}'
        entity.name = prop
        parent_entity.children.append(entity)

    return parent_entity


def _parse_advertisement_data(data: AdvertisementData) -> TheengsEntity:
    """
    :param data: The data received from a Bluetooth advertisement packet.
    :return: A :class:`platypush.entity.bluetooth.TheengsEntity` instance that
        maps the parsed attributes.
    """

    entity_args, properties, brand, model, model_id = ({}, {}, None, None, None)

    if data.service_data:
        parsed_data = list(data.service_data.keys())[0]
        # TheengsDecoder only accepts 16 bit uuid's, this converts the 128 bit uuid to 16 bit.
        entity_args['servicedatauuid'] = parsed_data[4:8]
        parsed_data = str(list(data.service_data.values())[0].hex())
        entity_args['servicedata'] = parsed_data

    if data.manufacturer_data:
        parsed_data = str(
            struct.pack('<H', list(data.manufacturer_data.keys())[0]).hex()
        )
        parsed_data += str(list(data.manufacturer_data.values())[0].hex())
        entity_args['manufacturerdata'] = parsed_data

    if data.local_name:
        entity_args['name'] = data.local_name

    if entity_args:
        encoded_ret = decodeBLE(json.dumps(entity_args))

        if encoded_ret:
            entity_args = json.loads(encoded_ret)

            if entity_args.get('model_id'):
                properties = json.loads(getProperties(entity_args['model_id'])).get(
                    'properties', {}
                )
                model = getAttribute(entity_args['model_id'], 'model')

        model_id = entity_args.pop('model_id', None)

    return TheengsEntity(
        data=entity_args,
        properties=properties,
        brand=brand,
        model=model,
        model_id=model_id,
    )


def parse_device_args(device: BLEDevice) -> Dict[str, Any]:
    """
    :param device: The device to parse.
    :return: The mapped device arguments required to initialize a
        :class:`platypush.entity.bluetooth.BluetoothDevice` or
        :class:`platypush.message.event.bluetooth.BluetoothDeviceEvent`
        object.
    """

    props = (device.details or {}).get('props', {})
    return {
        'name': device.name or device.address,
        'connected': props.get('Connected', False),
        'paired': props.get('Paired', False),
        'blocked': props.get('Blocked', False),
        'trusted': props.get('Trusted', False),
        'rssi': device.rssi,
        'tx_power': props.get('TxPower'),
        'uuids': {
            uuid: uuidstr_to_str(uuid) for uuid in device.metadata.get('uuids', [])
        },
        'manufacturers': {
            manufacturer_id: company.get(manufacturer_id, 'Unknown')
            for manufacturer_id in sorted(
                device.metadata.get('manufacturer_data', {}).keys()
            )
        },
        'manufacturer_data': _parse_manufacturer_data(device),
        'service_data': _parse_service_data(device),
    }


def _parse_manufacturer_data(device: BLEDevice) -> Dict[int, str]:
    """
    :param device: The device to parse.
    :return: The manufacturer data as a ``manufacturer_id -> hex_string``
        mapping.
    """
    return {
        manufacturer_id: ''.join([f'{x:02x}' for x in value])
        for manufacturer_id, value in device.metadata.get(
            'manufacturer_data', {}
        ).items()
    }


def _parse_service_data(device: BLEDevice) -> Dict[str, str]:
    """
    :param device: The device to parse.
    :return: The service data as a ``service_uuid -> hex_string`` mapping.
    """
    return {
        service_uuid: ''.join([f'{x:02x}' for x in value])
        for service_uuid, value in (device.details or {})
        .get('props', {})
        .get('ServiceData', {})
        .items()
    }