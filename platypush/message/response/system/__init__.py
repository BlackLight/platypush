from datetime import datetime
from typing import Optional, List

from platypush.message.response import Response


class SystemResponse(Response):
    pass


class CpuResponse(SystemResponse):
    pass


class MemoryResponse(SystemResponse):
    pass


class DiskResponse(SystemResponse):
    pass


class NetworkResponse(SystemResponse):
    pass


class SensorResponse(SystemResponse):
    pass


class DiskPartitionResponse(DiskResponse):
    def __init__(
        self,
        device: str,
        mount_point: str,
        fstype: Optional[str] = None,
        opts: Optional[str] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'device': device,
                'mount_point': mount_point,
                'fstype': fstype,
                'opts': opts,
            },
            **kwargs
        )


class DiskUsageResponse(DiskResponse):
    def __init__(
        self,
        path: str,
        total: int,
        used: int,
        free: int,
        percent: float,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'path': path,
                'total': total,
                'used': used,
                'free': free,
                'percent': percent,
            },
            **kwargs
        )


class DiskIoCountersResponse(DiskResponse):
    def __init__(
        self,
        read_count: int,
        write_count: int,
        read_bytes: int,
        write_bytes: int,
        read_time: int,
        write_time: int,
        read_merged_count: int,
        write_merged_count: int,
        busy_time: int,
        disk: Optional[str] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'read_count': read_count,
                'write_count': write_count,
                'read_bytes': read_bytes,
                'write_bytes': write_bytes,
                'read_time': read_time,
                'write_time': write_time,
                'read_merged_count': read_merged_count,
                'write_merged_count': write_merged_count,
                'busy_time': busy_time,
                'disk': disk,
            },
            **kwargs
        )


class NetworkIoCountersResponse(NetworkResponse):
    def __init__(
        self,
        bytes_sent: int,
        bytes_recv: int,
        packets_sent: int,
        packets_recv: int,
        errin: int,
        errout: int,
        dropin: int,
        dropout: int,
        nic: Optional[str] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'bytes_sent': bytes_sent,
                'bytes_recv': bytes_recv,
                'packets_sent': packets_sent,
                'packets_recv': packets_recv,
                'errin': errin,
                'errout': errout,
                'dropin': dropin,
                'dropout': dropout,
                'nic': nic,
            },
            **kwargs
        )


class NetworkConnectionResponse(NetworkResponse):
    # noinspection PyShadowingBuiltins
    def __init__(
        self,
        fd: int,
        family: str,
        type: str,
        local_address: str,
        local_port: int,
        remote_address: str,
        remote_port: int,
        status: str,
        pid: int,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'fd': fd,
                'family': family,
                'type': type,
                'local_address': local_address,
                'local_port': local_port,
                'remote_address': remote_address,
                'remote_port': remote_port,
                'status': status,
                'pid': pid,
            },
            **kwargs
        )


class NetworkAddressResponse(NetworkResponse):
    def __init__(
        self,
        nic: str,
        ipv4_address: Optional[str] = None,
        ipv4_netmask: Optional[str] = None,
        ipv4_broadcast: Optional[str] = None,
        ipv6_address: Optional[str] = None,
        ipv6_netmask: Optional[str] = None,
        ipv6_broadcast: Optional[str] = None,
        mac_address: Optional[str] = None,
        mac_broadcast: Optional[str] = None,
        ptp: Optional[str] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'nic': nic,
                'ipv4_address': ipv4_address,
                'ipv4_netmask': ipv4_netmask,
                'ipv4_broadcast': ipv4_broadcast,
                'ipv6_address': ipv6_address,
                'ipv6_netmask': ipv6_netmask,
                'ipv6_broadcast': ipv6_broadcast,
                'mac_address': mac_address,
                'mac_broadcast': mac_broadcast,
                'ptp': ptp,
            },
            **kwargs
        )


class NetworkInterfaceStatsResponse(NetworkResponse):
    def __init__(
        self, nic: str, is_up: bool, duplex: str, speed: int, mtu: int, *args, **kwargs
    ):
        super().__init__(
            *args,
            output={
                'nic': nic,
                'is_up': is_up,
                'duplex': duplex,
                'speed': speed,
                'mtu': mtu,
            },
            **kwargs
        )


class SensorTemperatureResponse(SensorResponse):
    def __init__(
        self,
        name: str,
        current: float,
        high: Optional[float] = None,
        critical: Optional[float] = None,
        label: Optional[str] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'name': name,
                'current': current,
                'high': high,
                'critical': critical,
                'label': label,
            },
            **kwargs
        )


class SensorFanResponse(SensorResponse):
    def __init__(
        self, name: str, current: int, label: Optional[str] = None, *args, **kwargs
    ):
        super().__init__(
            *args,
            output={
                'name': name,
                'current': current,
                'label': label,
            },
            **kwargs
        )


class SensorBatteryResponse(SensorResponse):
    def __init__(
        self, percent: float, secs_left: int, power_plugged: bool, *args, **kwargs
    ):
        super().__init__(
            *args,
            output={
                'percent': percent,
                'secs_left': secs_left,
                'power_plugged': power_plugged,
            },
            **kwargs
        )


class ConnectUserResponse(SystemResponse):
    def __init__(
        self,
        name: str,
        terminal: str,
        host: str,
        started: datetime,
        pid: Optional[int] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'name': name,
                'terminal': terminal,
                'host': host,
                'started': started,
                'pid': pid,
            },
            **kwargs
        )


class ProcessResponse(SystemResponse):
    def __init__(
        self,
        pid: int,
        name: str,
        started: datetime,
        ppid: Optional[int],
        children: Optional[List[int]] = None,
        exe: Optional[List[str]] = None,
        status: Optional[str] = None,
        username: Optional[str] = None,
        terminal: Optional[str] = None,
        cpu_user_time: Optional[float] = None,
        cpu_system_time: Optional[float] = None,
        cpu_children_user_time: Optional[float] = None,
        cpu_children_system_time: Optional[float] = None,
        mem_rss: Optional[int] = None,
        mem_vms: Optional[int] = None,
        mem_shared: Optional[int] = None,
        mem_text: Optional[int] = None,
        mem_data: Optional[int] = None,
        mem_lib: Optional[int] = None,
        mem_dirty: Optional[int] = None,
        mem_percent: Optional[float] = None,
        *args,
        **kwargs
    ):
        super().__init__(
            *args,
            output={
                'pid': pid,
                'name': name,
                'started': started,
                'ppid': ppid,
                'exe': exe,
                'status': status,
                'username': username,
                'terminal': terminal,
                'cpu_user_time': cpu_user_time,
                'cpu_system_time': cpu_system_time,
                'cpu_children_user_time': cpu_children_user_time,
                'cpu_children_system_time': cpu_children_system_time,
                'mem_rss': mem_rss,
                'mem_vms': mem_vms,
                'mem_shared': mem_shared,
                'mem_text': mem_text,
                'mem_data': mem_data,
                'mem_lib': mem_lib,
                'mem_dirty': mem_dirty,
                'mem_percent': mem_percent,
                'children': children or [],
            },
            **kwargs
        )


class SystemResponseList(SystemResponse):
    def __init__(self, responses: List[SystemResponse], *args, **kwargs):
        super().__init__(output=[r.output for r in responses], *args, **kwargs)


class DiskResponseList(DiskResponse, SystemResponseList):
    def __init__(self, responses: List[DiskResponse], *args, **kwargs):
        super().__init__(responses=responses, *args, **kwargs)


class NetworkResponseList(NetworkResponse, SystemResponseList):
    def __init__(self, responses: List[NetworkResponse], *args, **kwargs):
        super().__init__(responses=responses, *args, **kwargs)


class SensorResponseList(SensorResponse, SystemResponseList):
    def __init__(self, responses: List[SensorResponse], *args, **kwargs):
        super().__init__(responses=responses, *args, **kwargs)


class ConnectedUserResponseList(SystemResponseList):
    def __init__(self, responses: List[ConnectUserResponse], *args, **kwargs):
        super().__init__(responses=responses, *args, **kwargs)


class ProcessResponseList(SystemResponseList):
    def __init__(self, responses: List[ProcessResponse], *args, **kwargs):
        super().__init__(responses=responses, *args, **kwargs)


# vim:sw=4:ts=4:et:
