import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import r2_score, mean_absolute_error, root_mean_squared_error
from sklearn.tree import DecisionTreeRegressor
from data.data_preprocessing import clean_data

def compare_regression_models():
    df = clean_data()
    df = df[df["category"] == "Desktop"]
    X = df[["cpuMark", "cores"]]
    y = df["price"]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    models = {
        "Linear Regression": LinearRegression(),
        "Ridge Regression": Ridge(alpha=1.0),
        "Lasso Regression": Lasso(alpha=0.1),
        "Random Forest": RandomForestRegressor(n_estimators=100, random_state=42),
        "Gradient Boosting": GradientBoostingRegressor(random_state=42),
        "Decision Tree": DecisionTreeRegressor(random_state=42)
    }

    results = []
    for name, model in models.items():
        model.fit(X_train, y_train)
        predictions = model.predict(X_test)

        results.append({
            "Model": name,
            "R2 (higher is better)": round(r2_score(y_test, predictions), 4),
            "MAE (lower is better)": round(mean_absolute_error(y_test, predictions), 2),
            "RMSE (lower is better)": round(root_mean_squared_error(y_test, predictions), 2)
        })

    results_df = pd.DataFrame(results)
    results_df = results_df.sort_values(by="R2 (higher is better)", ascending=False).reset_index(drop=True)
    print(results_df)
