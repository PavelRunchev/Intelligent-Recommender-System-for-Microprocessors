from io import BytesIO
from flask import send_file
from export.prepare_dataframe import prepare_export_dataframe

def create_csv_report(df):
    df = prepare_export_dataframe(df)
    output = BytesIO()

    df.to_csv(output, index=False, encoding="utf-8-sig")
    output.seek(0)

    return send_file(
        output,
        as_attachment=True,
        download_name="CPU_Recommendations.csv",
        mimetype="text/csv"
    )