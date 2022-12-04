from sqlalchemy import Column, Integer, ForeignKey, Float

from platypush.common.db import Base

from .devices import Device


if 'dimmer' not in Base.metadata:

    class Dimmer(Device):
        __tablename__ = 'dimmer'

        id = Column(
            Integer, ForeignKey(Device.id, ondelete='CASCADE'), primary_key=True
        )
        min = Column(Float)
        max = Column(Float)
        step = Column(Float, default=1.0)
        value = Column(Float)

        __mapper_args__ = {
            'polymorphic_identity': __tablename__,
        }
