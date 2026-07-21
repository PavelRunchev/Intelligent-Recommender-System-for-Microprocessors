from flask import session
import uuid


def get_session_id():
    if "context_id" not in session:
        session["context_id"] = str(uuid.uuid4())

    return session["context_id"]