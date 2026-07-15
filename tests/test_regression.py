from services.content_based_filtering import content_based_filtering
from models.regression_model import predict_regression


def test_regression_model():
    user_features = {
        "brand": ["AMD"],
        "model": ["AMD Ryzen 7 5800X"],
        "category": ["Desktop"],
        "budget": 500,
        "performance": 20000,
        "cores": 8
    }

    result = content_based_filtering(user_features)
    result = predict_regression(result)

    assert not result.empty
    assert "predicted_price" in result.columns
    assert "price_rating" in result.columns
    assert result["price_rating"].iloc[0] in ["Изгоден","Надценен"]