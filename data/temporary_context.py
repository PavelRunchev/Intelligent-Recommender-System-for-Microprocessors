
from utils.session_manager import get_session_id

temporary_context = {}

def save_context(session_id, dataset, regression_model, classification_model):
    temporary_context[session_id] = {
        "dataset": dataset,
        "regression_model": regression_model,
        "classification_model": classification_model,
        "last_filters": None,
        "last_results": None
    }

def get_context(session_id):
    return temporary_context.get(session_id)

def clear_context(session_id):
    temporary_context.pop(session_id, None)

def has_context(session_id):
    return session_id in temporary_context

def remove_context(context_id):
    temporary_context.pop(context_id, None)

def get_active_context():
    try:
        return get_context(get_session_id())
    except RuntimeError:
        return None