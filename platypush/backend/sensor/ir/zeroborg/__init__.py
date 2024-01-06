import time

from platypush.backend import Backend
from platypush.message.event.sensor.ir import IrKeyUpEvent, IrKeyDownEvent


class SensorIrZeroborgBackend(Backend):
    """
    This backend will read for events on the infrared sensor of a ZeroBorg
    (https://www.piborg.org/motor-control-1135/zeroborg) circuitry for
    Raspberry Pi. You can see the codes associated to an IR event from any
    remote by running the scan utility::

        python -m platypush.backend.sensor.ir.zeroborg.scan
    """

    last_message = None
    last_message_timestamp = None

    def __init__(self, no_message_timeout=0.37, **kwargs):
        import platypush.plugins.gpio.zeroborg.lib as ZeroBorg

        super().__init__(**kwargs)
        self.no_message_timeout = no_message_timeout
        self.zb = ZeroBorg.ZeroBorg()
        self.zb.Init()
        self.logger.info('Initialized Zeroborg infrared sensor backend')

    def run(self):
        super().run()

        while not self.should_stop():
            try:
                self.zb.GetIrMessage()
                if self.zb.HasNewIrMessage():
                    message = self.zb.GetIrMessage()
                    if message != self.last_message:
                        self.logger.info(
                            'Received key down event on the IR sensor: %s', message
                        )
                        self.bus.post(IrKeyDownEvent(message=message))

                    self.last_message = message
                    self.last_message_timestamp = time.time()
            except OSError as e:
                self.logger.warning(
                    'Failed reading IR sensor status: %s: %s', type(e), e
                )

            if (
                self.last_message_timestamp
                and time.time() - self.last_message_timestamp > self.no_message_timeout
            ):
                self.logger.info('Received key up event on the IR sensor')
                self.bus.post(IrKeyUpEvent(message=self.last_message))

                self.last_message = None
                self.last_message_timestamp = None


# vim:sw=4:ts=4:et:
