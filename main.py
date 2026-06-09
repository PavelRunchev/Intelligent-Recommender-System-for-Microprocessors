from data.data_access import load_data
from data.vizualization_dataset import histogram, boxplot, scatterplot, corelation_matrix, intel_vs_amd_performance
from data.data_preprocessing import process_missing_values, clean_data, load_data
from models.classification_model import train_classification_model, predict_class

from services.content_based_filtering import content_based_filtering
from services.topsis import topsis_method
import pandas as pd
from models.regression_model import train_regression_model, predict_regression
from tests.regression_comparison import compare_regression_models
from tests.classification_comparison import compare_classification_models

pd.set_option('display.max_columns', None)
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)


df = clean_data()
#
# print("\n".join(df.columns))
#
df = df[df["category"] == "Desktop"]
train_regression_model(df)
train_classification_model(df)
#
user_features = {
    "brand": "Intel",
    "model": "Intel Core i7-12700KF",
    "category": "",
    "budget": 350,
    "performance": 12000,
    "cores": 4
}

result = content_based_filtering(user_features)
result = result.reset_index(drop=True)

result = predict_regression(result)

result = predict_class(result)

result = topsis_method(result)

print(result[["cpuName", "price", "cpuMark", "price_rating", "cpu_class", "topsis_score"]])
print()


#compare_regression_models()
# print("higher is better")
# result = compare_classification_models()
# print(result)
#
# print("\nModel Evaluation:\n")
#
# create_comparison_table()



# reg_model = train_regression_model(df)
# class_model = train_classification_model(df)
#
# sample = df.sample(10).copy()
#
# sample = predicted_regression(df)
# sample = predict_class(class_model, sample)
#


