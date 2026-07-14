
def prepare_export_dataframe(df):
    df = df.copy()

    COLUMN_NAMES = {
        "cpuName": "Processor",
        "brand": "Brand",
        "price": "Price (€)",
        "cpuMark": "Performance (CPU Mark)",
        "cores": "Cores",
        "threadMark": "Thread Rating",
        "cpuValue": "CPU Value",
        "TDP": "TDP (W)",
        "category": "Category",
        "socket": "Socket",
        "predicted_price": "Predicted Price (€)",
        "price_rating": "Price Evaluation",
        "cpu_class": "Performance Class",
        "topsis_score": "TOPSIS Score"
    }

    COLUMN_ORDER = [
        "Processor",
        "Brand",
        "Category",
        "Socket",

        "Price (€)",
        "Predicted Price (€)",
        "Price Evaluation",

        "Performance (CPU Mark)",
        "Thread Rating",
        "CPU Value",
        "Cores",
        "TDP (W)",

        "Performance Class",
        "TOPSIS Score"
    ]

    df = df.drop(columns=["id"], errors="ignore")
    df = df.rename(columns=COLUMN_NAMES)
    df = df[COLUMN_ORDER]

    return df