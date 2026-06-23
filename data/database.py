import os
from sqlalchemy import create_engine

def get_connection():
    return create_engine(os.getenv("DATABASE_URL"))
