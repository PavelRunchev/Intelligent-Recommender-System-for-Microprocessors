from sklearn.linear_model import Ridge
import joblib


features = ["cpuMark", "cores"]

def train_regression_model(df):
    X = df[features]
    y = df["price"]

    model = Ridge(alpha=1.0)
    model.fit(X, y)
    #save model in file - price_model.pkl
    joblib.dump(model, "models/price_model.pkl")
    return

def predict_regression(df):
    if df.empty:
        return df

    model = joblib.load("models/price_model.pkl")

    df["predicted_price"] = model.predict(df[features]).clip(min=20).round(2)
    gap = df["predicted_price"] - df["price"]

    ratings = []
    for value in gap:
        if value > 0:
            ratings.append("Изгоден")
        else:
            ratings.append("Надценен")

    df["price_rating"] = ratings
    return df


