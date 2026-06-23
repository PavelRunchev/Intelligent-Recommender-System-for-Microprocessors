
import logging
from flask import Flask, render_template, request
from data.data_preprocessing import get_top_cpus
from services.ml_pipeline import run_pipeline
from services.model_initializer import initialize_models
from data.data_preprocessing import clean_data
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(filename="app.log", level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

app = Flask(__name__)

logging.basicConfig(filename="app.log", level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

logging.info("Application started")
data = clean_data()
initialize_models(data)


def validate_input(brand, model, category, budget, performance, cores):
    valid_brands = data["brand"].unique().tolist()
    valid_models = data["cpuName"].unique().tolist()
    valid_categories = data["category"].unique().tolist()

    if isinstance(brand, str):
        brand = [brand]
    if isinstance(model, str):
        model = [model]
    if isinstance(category, str):
        category = [category]

    if not all(b in valid_brands for b in brand):
        return "Invalid brand!"
    if not all(m in valid_models for m in model):
        return "Invalid model!"
    if not all(c in valid_categories for c in category):
        return "Invalid category!"
    if budget < 1 or budget > 100000:
        return "Invalid budget!"
    if performance < 1 or performance > 200000:
        return "Invalid performance!"
    if cores < 1 or cores > 100:
        return "Invalid cores!"

    return ({"brand": brand,"model": model,"category": category,
        "budget": budget,"performance": performance,"cores": cores},
        None)

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

            user_features, error = validate_input(
                brand,
                model,
                category,
                budget,
                performance,
                cores
            )

            if error:
                return error, 400

            result = run_pipeline(user_features)
            searched = True
        except (ValueError, TypeError):
            return "Invalid input data!", 400


    return render_template("index.html",
            searched=searched,
            result=result,
            data=data.to_dict(orient='records'),
            top_cpus=top_cpus.to_dict(orient='records'),
            user=user_features
    )

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)


