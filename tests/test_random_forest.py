from services.content_based_filtering import content_based_filtering
from models.regression_model import predict_regression
from models.classification_model import predict_class


def test_random_forest_model():
    user_features = {
        "brand": "AMD",
        "model": "AMD Ryzen 7 5800X",
        "category": "Desktop",
        "budget": 500,
        "performance": 20000,
        "cores": 8
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