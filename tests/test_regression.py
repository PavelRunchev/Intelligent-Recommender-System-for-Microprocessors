from services.content_based_filtering import content_based_filtering
from models.regression_model import predict_regression
from data.data_preprocessing import clean_data


def test_regression_model():
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

    assert not result.empty
    assert "predicted_price" in result.columns
    assert "price_rating" in result.columns
    assert result["price_rating"].iloc[0] in ["Изгоден","Надценен"]