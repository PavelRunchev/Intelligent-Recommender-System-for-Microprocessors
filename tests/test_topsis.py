from services.content_based_filtering import content_based_filtering
from models.regression_model import predict_regression
from models.classification_model import predict_class
from services.topsis import topsis_method
import pandas as pd
from data.data_preprocessing import clean_data

def test_topsis():
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

    if len(result) > 1:
        result = topsis_method(result)

        assert not result.empty
        assert "topsis_score" in result.columns
        assert pd.api.types.is_numeric_dtype(result["topsis_score"])
        assert result["topsis_score"].is_monotonic_decreasing
    else:
        assert len(result) == 1