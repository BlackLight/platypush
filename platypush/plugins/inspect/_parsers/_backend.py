import re
from typing_extensions import override

from ._base import Parser


class BackendParser(Parser):
    """
    Parse backend references in the docstrings with rendered links to their
    respective documentation.
    """

    _backend_regex = re.compile(
        r'(\s*):class:`(platypush\.backend\.(.+?))`', re.MULTILINE
    )

    @override
    @classmethod
    def parse(cls, docstring: str, *_, **__) -> str:
        while True:
            m = cls._backend_regex.search(docstring)
            if not m:
                break

            class_name = m.group(3).split('.')[-1]
            package = '.'.join(m.group(3).split('.')[:-1])
            docstring = cls._backend_regex.sub(
                f'{m.group(1)}`{class_name} '
                f'<https://docs.platypush.tech/platypush/backend/{package}.html#{m.group(2)}>`_',
                docstring,
                count=1,
            )

        return docstring