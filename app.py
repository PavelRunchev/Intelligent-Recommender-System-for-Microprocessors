import logging

from flask import Flask, render_template, request
from data.data_preprocessing import get_top_cpus
from services.ml_pipeline import run_pipeline
from services.model_initializer import initialize_models
from data.data_preprocessing import clean_data

app = Flask(__name__)

logging.basicConfig(filename="app.log", level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
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
            brand = request.form.get("brand") or None
            model = request.form.get("cpuName") or None
            category = request.form.get("category") or None
            budget = int(request.form.get("budget"))
            performance = int(request.form.get("cpuMark"))
            cores = int(request.form.get("cores"))

            if brand not in ["AMD", "Intel", "Celeron"]:
                return "Invalid brand!", 400
            if not model:
                return "Invalid model!", 400
            if not category:
                return "Invalid category!", 400
            if budget < 1 or budget > 100000:
                return "Invalid budget!", 400
            if performance < 1 or performance > 200000:
                return "Invalid performance!", 400
            if cores < 1 or cores > 100:
                return "Invalid cores!", 400

            user_features = {"brand": brand,"model": model,"category":
                category,"budget": budget,"performance":
                performance,"cores": cores
            }

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
    app.run(debug=True)









