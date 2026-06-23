import pandas as pd
from data.database import get_connection

def load_data():
    #return pd.read_csv("data/CPU_benchmark_v4.csv")
    connection = get_connection()
    query = "SELECT * FROM processors"
    df = pd.read_sql(query, connection)

    connection.dispose()

    return df












