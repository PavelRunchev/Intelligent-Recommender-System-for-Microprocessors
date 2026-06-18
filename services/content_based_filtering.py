from data.data_preprocessing import clean_data

def extract_cpu_series(cpu_name):
    return cpu_name.split()[1]

def content_based_filtering(user_features):
    df = clean_data()
    results = df.copy()
    if user_features.get("brand"):
        results = results[results["brand"].isin(user_features["brand"])]
    if user_features.get("model"):
        models = user_features["model"]
        selected_models = []
        for cpu in results["cpuName"]:
            for model in models:
                series = extract_cpu_series(model)
                if series in cpu:
                    selected_models.append(cpu)
                    break
        results = results[results["cpuName"].isin(selected_models)]
    if user_features.get("category"):
        results = results[results["category"].isin(user_features["category"])]
    if user_features.get("budget"):
        results = results[results["price"] <= user_features["budget"]]
    if user_features.get("performance"):
        results = results[results["cpuMark"] >= user_features["performance"]]
    if user_features.get("cores"):
        results = results[results["cores"] >= user_features["cores"]]

    results["recommender_score"] = (
        (results["cpuMark"] / user_features["performance"]) * 0.5 +
        (user_features["budget"] / results["price"]) * 0.3 +
        (results["cores"] / user_features["cores"]) * 0.2
    ).round(2)
    results = results.sort_values(by="recommender_score", ascending=False)
    return results









