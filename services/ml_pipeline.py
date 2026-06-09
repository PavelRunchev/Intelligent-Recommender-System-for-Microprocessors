import logging
from services.content_based_filtering import content_based_filtering
from services.topsis import topsis_method
from models.regression_model import predict_regression
from models.classification_model import predict_class


def run_pipeline(user_features):
    #recommend CPUs based on user-defined criteria
    logging.info("Recommendation process started")
    result = content_based_filtering(user_features)

    if result is None or result.empty:
        logging.info("No matching processors found")
        return []

    #predict price using Ridge Regression
    result = predict_regression(result)
    logging.info("Regression prediction completed")
    #predict CPU class using Random Forest Classifier
    result = predict_class(result)
    logging.info("Classification completed")

    if len(result) > 1:
        #rank CPUs using the TOPSIS method
        result = topsis_method(result)
        logging.info("TOPSIS ranking completed")
    else:
        #TOPSIS is not needed for a single result
        result["topsis_score"] = 1.0
        logging.info("Single result returned without TOPSIS ranking")

    return result.to_dict(orient='records')





