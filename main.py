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

from tests.experimental_method import calculate_entropy_weights, define_classes_by_quantiles, define_classes_by_kmeans

# pd.set_option('display.max_columns', None)
 # pd.set_option('display.width', None)
# pd.set_option('display.max_colwidth', None)

df = pd.read_csv("data/CPU_benchmark_v4.csv")
data = clean_data()




calculate_entropy_weights(df)
calculate_entropy_weights(data)

define_classes_by_quantiles(df)
define_classes_by_quantiles(data)

define_classes_by_kmeans(df)
define_classes_by_kmeans(data)