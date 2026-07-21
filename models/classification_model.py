from sklearn.ensemble import RandomForestClassifier
import joblib
from models.kmeans_clustering import define_classes_by_kmeans
from data.temporary_context import get_active_context

features = ["cores", "cpuValue", "threadMark", "TDP"]
def train_classification_model(df):
    df = df.copy()

    performance_classes = define_classes_by_kmeans(df)
    df["performance_class"] = performance_classes

    X = df[features]
    y = df["performance_class"]

    model = RandomForestClassifier(random_state=42)
    model.fit(X, y)

    joblib.dump(model, "models/class_model.pkl")
    return

def train_classification_model_temp(df):
    df = df.copy()

    performance_classes = define_classes_by_kmeans(df)
    df["performance_class"] = performance_classes

    X = df[features]
    y = df["performance_class"]

    model = RandomForestClassifier(random_state=42)
    model.fit(X, y)
    return model

def predict_class(df):
    context = get_active_context()
    if context and context["classification_model"] is not None:
        model = context["classification_model"]
    else:
        model = joblib.load("models/class_model.pkl")

    df["cpu_class"] = model.predict(df[features])
    return df


