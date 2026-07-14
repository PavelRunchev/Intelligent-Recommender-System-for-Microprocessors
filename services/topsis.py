from topsisx.topsis import topsis

import numpy as np

# автоматично изчисляване на теглата за метода TOPSIS!
def calculate_entropy_weights(criteria):
    X = criteria.astype(float).values
    # Нормализация по колони
    column_sum = X.sum(axis=0)
    column_sum[column_sum == 0] = 1

    P = X / column_sum

    epsilon = 1e-12
    P = np.clip(P, epsilon, None)
    n = X.shape[0]

    entropy = -(P * np.log(P)).sum(axis=0) / np.log(n)
    diversification = 1 - entropy

    weights = diversification / diversification.sum()
    return weights.tolist()


def topsis_method(data):
    criteria = data[['cpuMark', 'price', 'cores']]

    weights = calculate_entropy_weights(criteria)
    impacts = ['+', '-', '+']

    result = topsis(criteria, weights, impacts)

    data['topsis_score'] = result['Topsis_Score'].round(2)
    return data.sort_values(by='topsis_score', ascending=False)





