from sklearn.ensemble import RandomForestClassifier
import joblib

features = ["cores", "cpuValue", "threadMark", "TDP"]
def train_classification_model(df):
    performance_classes = []
    for value in df["cpuMark"]:
        if value < 15000:
            performance_classes.append("Бюджетен")
        elif value < 30000:
            performance_classes.append("Среден клас")
        elif value <= 60000:
            performance_classes.append("Висок клас")
        else:
            performance_classes.append("Екстремен")

    df["performance_class"] = performance_classes

    X = df[features]
    y = df["performance_class"]

    model = RandomForestClassifier()
    model.fit(X, y)

    joblib.dump(model, "models/class_model.pkl")
    return


def predict_class(df):
    model = joblib.load("models/class_model.pkl")
    df["cpu_class"] = model.predict(df[features])
    return df


