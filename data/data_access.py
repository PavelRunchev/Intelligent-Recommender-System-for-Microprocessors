import pandas as pd
import logging
from data.database import get_connection

def load_data():
    #
    connection = get_connection()
    try:
        if connection is None:
            return pd.read_csv("data/CPU_benchmark_v4.csv")

        return pd.read_sql("SELECT * FROM processors", connection)
    except Exception as e:
        print("DataBase ERROR!")
        logging.error("DB Error!", e)
    finally:
        if connection is not None:
            connection.dispose()













