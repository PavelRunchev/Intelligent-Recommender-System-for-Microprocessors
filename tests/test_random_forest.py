from services.content_based_filtering import content_based_filtering
from models.regression_model import predict_regression
from models.classification_model import predict_class
from data.data_preprocessing import clean_data

def test_random_forest_model():
    df = clean_data()

    user_features = {
        "brand": [df["brand"].iloc[0]],
        "category": [df["category"].iloc[0]],
        "budget": 100000,
        "performance": 0,
        "cores": 1
    }

    result = content_based_filtering(user_features)
    result = predict_regression(result)
    result = predict_class(result)

    assert not result.empty
    assert "cpu_class" in result.columns
    assert result["cpu_class"].iloc[0] in [
        "Бюджетен",
        "Среден клас",
        "Висок клас",
        "Екстремен"
    ]