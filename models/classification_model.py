from sklearn.ensemble import RandomForestClassifier
import joblib
from models.kmeans_clustering import define_classes_by_kmeans

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

def predict_class(df):
    model = joblib.load("models/class_model.pkl")
    df["cpu_class"] = model.predict(df[features])
    return df


