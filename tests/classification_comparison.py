import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB

from data.data_preprocessing import clean_data

def compare_classification_models():
    df = clean_data()

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
    X = df[["cores", "cpuValue", "threadMark", "TDP"]]
    y = df["performance_class"]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

    models = {
        "Logistic Regression": LogisticRegression(),
        "Random Forest": RandomForestClassifier(random_state=42),
        "Decision Tree": DecisionTreeClassifier(random_state=42),
        "Gradient Boosting": GradientBoostingClassifier(random_state=42),
        "KNN": KNeighborsClassifier(),
        "Naive Bayes": GaussianNB()
    }

    results = []
    for name, model in models.items():
        model.fit(X_train, y_train)
        predictions = model.predict(X_test)

        results.append({"Model": name, "Accuracy": round(accuracy_score(y_test, predictions), 4),
            "Precision": round(precision_score(y_test, predictions, average="weighted", zero_division=0), 4),
            "Recall": round(recall_score( y_test, predictions, average="weighted"), 4),
            "F1 Score": round(f1_score(y_test, predictions, average="weighted"), 4),
        })

    results_df = pd.DataFrame(results)
    results_df = results_df.sort_values(by="Accuracy", ascending=False)
    return results_df.reset_index(drop=True)
