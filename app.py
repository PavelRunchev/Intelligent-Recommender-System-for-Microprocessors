import os
import logging
from flask import Flask, render_template, request, session
from data.data_preprocessing import get_top_cpus

from services.ml_pipeline import run_pipeline
from services.model_initializer import initialize_models
from data.data_preprocessing import clean_data
from dotenv import load_dotenv
from services.validate_input_data import validate_input
from export.excel_export import create_excel_report
from export.csv_export import create_csv_report
from export.pdf_export import create_pdf_report

load_dotenv()
logging.basicConfig(filename="app.log", level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")
if not app.secret_key:
    raise RuntimeError("SECRET_KEY is not configured!")

print("SECRET_KEY:", app.secret_key)

logging.info("Application started")
data = clean_data()
initialize_models(data)


@app.route("/", methods=["GET", "POST"])
def index():
    #default table with CPU by performance order
    top_cpus = get_top_cpus()

    result = None
    user_features = None
    searched = False
    if request.method == "POST":
        try:
            brand = request.form.get("brand") or data["brand"].unique().tolist()
            model = request.form.get("cpuName") or data["cpuName"].unique().tolist()
            category = request.form.get("category") or data["category"].unique().tolist()
            budget = int(request.form.get("budget"))
            performance = int(request.form.get("cpuMark"))
            cores = int(request.form.get("cores"))

            user_features, error = validate_input(data, brand, model, category, budget, performance, cores)

            if error:
                return error, 400

            result = run_pipeline(user_features)
            searched = True
            session["filters"] = user_features
        except (ValueError, TypeError):
            return "Invalid input data!", 400


    return render_template("index.html",
            searched=searched,
            result=result.to_dict(orient='records') if result is not None else [],
            data=data.to_dict(orient='records'),
            top_cpus=top_cpus.to_dict(orient='records'),
            user=user_features
    )

@app.route("/export/excel")
def export_excel():
    filters = session.get("filters")
    if not filters:
        return "No search form available to export", 400

    result = run_pipeline(filters)
    if result.empty:
        return "No data available to export!", 400

    return create_excel_report(result)

@app.route("/export_pdf")
def export_pdf():
    filters = session.get("filters")
    if not filters:
        return "No search form available to export", 400

    result = run_pipeline(filters)
    if result.empty:
        return "No data available to export!", 400

    return create_pdf_report(result)

@app.route("/export_csv")
def export_csv():
    filters = session.get("filters")
    if not filters:
        return "No search form available to export", 400

    result = run_pipeline(filters)
    if result.empty:
        return "No data available to export!", 400

    return create_csv_report(result)

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)


