import os
from models.regression_model import train_regression_model
from models.classification_model import train_classification_model

# loading training model on start app, only once!
def initialize_models(data):
    data = data[data["category"].isin(["Desktop", "Laptop"])]

    if not os.path.exists("models/price_model.pkl"):
        train_regression_model(data)
    if not os.path.exists("models/class_model.pkl"):
        train_classification_model(data)


