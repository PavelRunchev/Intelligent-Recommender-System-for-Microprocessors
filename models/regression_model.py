from sklearn.linear_model import Ridge
import joblib
from data.temporary_context import get_context
from utils.session_manager import get_session_id

features = ["cpuMark", "cores"]
def train_regression_model(df):
    X = df[features]
    y = df["price"]

    model = Ridge(alpha=1.0)
    model.fit(X, y)
    #save model in file - price_model.pkl
    joblib.dump(model, "models/price_model.pkl")
    return

def train_regression_model_temp(df):
    X = df[features]
    y = df["price"]

    model = Ridge(alpha=1.0)
    model.fit(X, y)

    return model

def predict_regression(df):
    if df.empty:
        return df

    context = get_context(get_session_id())

    if context and context["regression_model"] is not None:
        model = context["regression_model"]
    else:
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


