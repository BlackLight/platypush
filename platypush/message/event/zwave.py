import logging
from typing import Optional, Dict, Any

from platypush.message.event import Event


class ZwaveEvent(Event):
    def __init__(self, device: Optional[str] = None, *args, **kwargs):
        super().__init__(*args, device=device, **kwargs)


class ZwaveNetworkReadyEvent(ZwaveEvent):
    """
    Triggered when the network started on a Z-Wave adapter becomes ready.
    """

    def __init__(
        self,
        ozw_library_version: str,
        python_library_version: str,
        zwave_library: str,
        node_id: int,
        node_version: str,
        home_id: int,
        nodes_count: int,
        device: Optional[str] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            device=device,
            ozw_library_version=ozw_library_version,
            python_library_version=python_library_version,
            zwave_library=zwave_library,
            home_id=home_id,
            node_id=node_id,
            node_version=node_version,
            nodes_count=nodes_count,
            **kwargs
        )


class ZwaveNetworkStoppedEvent(ZwaveEvent):
    """
    Triggered when a Z-Wave network is stopped.
    """


class ZwaveNetworkErrorEvent(ZwaveEvent):
    """
    Triggered when an error occurs on the Z-Wave network.
    """


class ZwaveNetworkResetEvent(ZwaveEvent):
    """
    Triggered when a Z-Wave network is reset.
    """


class ZwaveNodeEvent(ZwaveEvent):
    """
    Generic Z-Wave node event class.
    """

    def __init__(self, node: Dict[str, Any], *args, **kwargs):
        super().__init__(*args, node=node, **kwargs)


class ZwaveNodeAddedEvent(ZwaveNodeEvent):
    """
    Triggered when a node is added to the network.
    """


class ZwaveNodeRemovedEvent(ZwaveNodeEvent):
    """
    Triggered when a node is removed from the network.
    """


class ZwaveNodeRenamedEvent(ZwaveNodeEvent):
    """
    Triggered when a node is renamed.
    """


class ZwaveNodeReadyEvent(ZwaveNodeEvent):
    """
    Triggered when a node is ready.
    """


class ZwaveNodeAsleepEvent(ZwaveNodeEvent):
    """
    Triggered when a node goes in sleep mode.
    """


class ZwaveNodeAwakeEvent(ZwaveNodeEvent):
    """
    Triggered when a node goes back into awake mode.
    """


class ZwaveNodeGroupEvent(ZwaveNodeEvent):
    """
    Triggered when a node is associated/de-associated to a group.
    """

    def __init__(self, group_index: Optional[int] = None, *args, **kwargs):
        # ZwaveNodeGroupEvent can be quite verbose, so we only report them if
        # debug logging is enabled
        kwargs['logging_level'] = logging.DEBUG
        super().__init__(*args, group_index=group_index, **kwargs)


class ZwaveNodeSceneEvent(ZwaveNodeEvent):
    """
    Triggered when a scene is activated on a node.
    """

    def __init__(self, scene_id: int, *args, **kwargs):
        super().__init__(*args, scene_id=scene_id, **kwargs)


class ZwaveNodePollingEnabledEvent(ZwaveNodeEvent):
    """
    Triggered when the polling of a node is successfully turned on.
    """


class ZwaveNodePollingDisabledEvent(ZwaveNodeEvent):
    """
    Triggered when the polling of a node is successfully turned off.
    """


class ZwaveButtonCreatedEvent(ZwaveNodeEvent):
    """
    Triggered when a button is added to the network.
    """


class ZwaveButtonRemovedEvent(ZwaveNodeEvent):
    """
    Triggered when a button is removed from the network.
    """


class ZwaveButtonOnEvent(ZwaveNodeEvent):
    """
    Triggered when a button is pressed.
    """


class ZwaveButtonOffEvent(ZwaveNodeEvent):
    """
    Triggered when a button is released.
    """


class ZwaveValueEvent(ZwaveEvent):
    """
    Abstract class for Z-Wave value events.
    """

    def __init__(self, node: Dict[str, Any], value: Dict[str, Any], *args, **kwargs):
        # ZwaveValueEvent can be quite verbose, so we only report them if debug
        # logging is enabled
        kwargs['logging_level'] = logging.DEBUG
        super().__init__(*args, node=node, value=value, **kwargs)


class ZwaveValueAddedEvent(ZwaveValueEvent):
    """
    Triggered when a value is added to a node on the network.
    """


class ZwaveValueChangedEvent(ZwaveValueEvent):
    """
    Triggered when a value of a node on the network changes.
    """


class ZwaveValueRefreshedEvent(ZwaveValueEvent):
    """
    Triggered when a value of a node on the network is refreshed.
    """


class ZwaveValueRemovedEvent(ZwaveValueEvent):
    """
    Triggered when a value of a node on the network is removed.
    """


class ZwaveNodeQueryCompletedEvent(ZwaveEvent):
    """
    Triggered when all the nodes on the network have been queried.
    """


class ZwaveCommandEvent(ZwaveEvent):
    """
    Triggered when a command is received on the network.
    """

    def __init__(
        self,
        state: str,
        state_description: str,
        error: Optional[str] = None,
        error_description: Optional[str] = None,
        node: Optional[Dict[str, Any]] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            state=state,
            state_description=state_description,
            error=error,
            error_description=error_description,
            node=node,
            **kwargs
        )


class ZwaveCommandWaitingEvent(ZwaveCommandEvent):
    """
    Triggered when a command is waiting for a message to proceed.
    """


# vim:sw=4:ts=4:et:
