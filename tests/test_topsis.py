from services.content_based_filtering import content_based_filtering
from models.regression_model import predict_regression
from models.classification_model import predict_class
from services.topsis import topsis_method
import pandas as pd

def test_topsis():
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
    result = topsis_method(result)

    assert not result.empty
    assert "topsis_score" in result.columns
    assert pd.api.types.is_numeric_dtype(result["topsis_score"])
    assert result["topsis_score"].is_monotonic_decreasing