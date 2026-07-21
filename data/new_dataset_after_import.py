from flask import jsonify
import pandas as pd
from models.regression_model import train_regression_model_temp
from models.classification_model import train_classification_model_temp
from data.temporary_context import save_context
from utils.session_manager import get_session_id

REQUIRED_COLUMNS = ["cpuName","price","cpuMark","cpuValue","threadMark","TDP","cores","socket","category"]
NUMERIC_COLUMNS = ['price', 'TDP', 'cores', 'cpuMark', 'cpuValue', 'threadMark', 'threadValue', 'powerPerf']
FINAL_COLUMNS = ["cpuName","brand","price","cpuMark","cpuValue","threadMark","threadValue","TDP","powerPerf","cores","socket","category"]

def extract_brand(cpu_name):
    if not isinstance(cpu_name, str) or cpu_name.strip() == '':
        return 'Unknown'
    return cpu_name.split()[0]

def clean_imported_dataset(df, currency):
    # remove duplicate values
    df = df.drop_duplicates(subset=['cpuName'])
    # remove columns
    df = df.drop(columns= ["testDate", "Number of sockets"], errors="ignore")

    # add new column brand
    df['brand'] = df['cpuName'].apply(extract_brand)
    # remove unknown values
    df = df[df["socket"].str.lower() != "unknown"]
    df = df[df["category"].str.lower() != "unknown"]
    df = df[df["brand"].str.lower() != "unknown"]

    df = convert_prices(df, currency)
    df = convert_numeric_columns(df)

    # remove None values (NaN)
    df = df.dropna(subset=NUMERIC_COLUMNS).reset_index(drop=True)

    df = df.reindex(columns=FINAL_COLUMNS)
    return df


def convert_prices(df, currency):
    df["price"] = (
        df["price"]
        .astype(str)
        .str.replace("$", "", regex=False)
        .str.replace("*", "", regex=False)
        .str.strip()
    )

    df["price"] = pd.to_numeric(df["price"], errors="coerce")

    if currency == "USD":
        df['price'] = (df['price'] * 0.92).round(2)
    else:
        df["price"] = df['price'].round(2)
    return df

def convert_numeric_columns(df):
    for column in ["cpuMark", "threadMark", "cores"]:
        if column not in df.columns:
            continue

        df[column] = (
            df[column]
            .astype(str)
            .str.replace(",", "", regex=False)
            .str.strip()
        )

        df[column] = pd.to_numeric(df[column], errors="coerce").astype("Int64")

    for column in ["price", "cpuValue", "threadValue", "TDP", "powerPerf"]:
        if column not in df.columns:
            continue

        df[column] = (
            df[column]
            .astype(str)
            .str.replace(",", "", regex=False)
            .str.strip()
        )

        df[column] = pd.to_numeric(df[column], errors="coerce")

    return df

def train_models_from_imported_dataset(df):
    regression_model = train_regression_model_temp(df)
    classification_model = train_classification_model_temp(df)
    return regression_model, classification_model

#main function for import dataset
def import_dataset_from_user(file, currency):
    try:
        if file is None:
            return jsonify({"success": False,"message": "No file received."})

        df = pd.read_csv(file)
        missing_columns = [column
            for column in REQUIRED_COLUMNS
            if column not in df.columns
        ]

        if missing_columns:
            return jsonify({ "success": False, "message": "Missing required columns.", "missing_columns": missing_columns})

        original_rows = len(df)

        df = clean_imported_dataset(df, currency)

        regression_model, classification_model = train_models_from_imported_dataset(df)

        context_id = get_session_id()
        save_context(context_id, df, regression_model, classification_model)

        cleaned_rows = len(df)

        return jsonify({
            "success": True,
            "validated": True,
            "rows_before_cleaning": original_rows,
            "rows_after_cleaning": cleaned_rows,
            "removed_rows": original_rows - cleaned_rows,
            "columns": len(df.columns),
            "column_names": list(df.columns),
            "missing_values": int(df.isna().sum().sum()),
            "duplicate_rows": int(df.duplicated().sum())
        })
    except Exception as e:
        print(e)
        return jsonify({ "success": False,"message": str(e) })






