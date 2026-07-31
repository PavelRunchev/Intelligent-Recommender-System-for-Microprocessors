from flask import session
from data.temporary_context import get_active_context


def get_last_filters():
    context = get_active_context()

    if context and context.get("last_filters"):
        return context["last_filters"]

    return session.get("filters")