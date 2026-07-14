import logging
from services.content_based_filtering import content_based_filtering
from services.topsis import topsis_method
from models.regression_model import predict_regression
from models.classification_model import predict_class


def run_pipeline(user_features):
    logging.info("Recommendation process started")
    result = content_based_filtering(user_features)

    if result is None or result.empty:
        logging.info("No matching processors found")
        return []

    result = predict_regression(result)
    logging.info("Regression prediction completed")

    result = predict_class(result)
    logging.info("Classification completed")

    if len(result) > 1:
        result = topsis_method(result)
        logging.info("TOPSIS ranking completed")
    else:
        result["topsis_score"] = 1.0
        logging.info("Single result returned without TOPSIS ranking")

    return result





