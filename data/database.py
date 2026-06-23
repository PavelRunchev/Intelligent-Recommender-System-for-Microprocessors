import os
from sqlalchemy import create_engine

def get_connection():
    url = os.getenv("DATABASE_URL")
    return create_engine(url)
