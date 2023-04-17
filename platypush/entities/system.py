from sqlalchemy import Column, ForeignKey, Integer, JSON, String

from platypush.common.db import Base

from . import Entity


if 'cpu' not in Base.metadata:

    class Cpu(Entity):
        """
        ``CPU`` ORM (container) model.
        """

        __tablename__ = 'cpu'

        id = Column(
            Integer, ForeignKey(Entity.id, ondelete='CASCADE'), primary_key=True
        )

        __mapper_args__ = {
            'polymorphic_identity': __tablename__,
        }


if 'cpu_info' not in Base.metadata:

    class CpuInfo(Entity):
        """
        ``CpuInfo`` ORM model.
        """

        __tablename__ = 'cpu_info'

        id = Column(
            Integer, ForeignKey(Entity.id, ondelete='CASCADE'), primary_key=True
        )

        architecture = Column(String)
        bits = Column(Integer)
        cores = Column(Integer)
        vendor = Column(String)
        brand = Column(String)
        frequency_advertised = Column(Integer)
        frequency_actual = Column(Integer)
        flags = Column(JSON)
        l1_instruction_cache_size = Column(Integer)
        l1_data_cache_size = Column(Integer)
        l2_cache_size = Column(Integer)
        l3_cache_size = Column(Integer)

        __mapper_args__ = {
            'polymorphic_identity': __tablename__,
        }


if 'cpu_times' not in Base.metadata:

    class CpuTimes(Entity):
        """
        ``CpuTimes`` ORM (container) model.
        """

        __tablename__ = 'cpu_times'

        id = Column(
            Integer, ForeignKey(Entity.id, ondelete='CASCADE'), primary_key=True
        )

        __mapper_args__ = {
            'polymorphic_identity': __tablename__,
        }