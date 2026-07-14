import numpy as np
import pandas as pd
from sklearn.cluster import KMeans

def calculate_entropy_weights(df):
    """
    Изчислява обективни тегла за критериите cpuMark (производителност),
    price (цена) и cores (брой физически ядра) чрез ентропийния метод.

    Логика:
      - cpuMark и cores са "benefit" критерии -> по-висока стойност е по-добра
      - price е "cost" критерий -> по-ниска стойност е по-добра
    """

    data = df[["cpuMark", "price", "cores"]].copy()
    n = len(data)
    # 1. нормализиране в [0, 1], с обръщане на посоката при цената

    normalized = pd.DataFrame(index=data.index)

    normalized["cpuMark"] = (data["cpuMark"] - data["cpuMark"].min()) / (data["cpuMark"].max() - data["cpuMark"].min())
    normalized["price"] = (data["price"] - data["price"].min()) / (data["price"].max() - data["price"].min())
    normalized["cores"] = (data["cores"] - data["cores"].min()) / (data["cores"].max() - data["cores"].min())

    # 2. проекционни тегла p_ij (всяка колона сумира до 1)
    p = normalized / normalized.sum(axis=0)
    p = p.replace(0, 1e-12)  # за да не се получи log(0)

    # 3. ентропия E_j за всеки критерий
    k = 1 / np.log(n)
    entropy = -k * (p * np.log(p)).sum(axis=0)

    # 4. степен на диверсификация d_j = 1 - E_j
    diversification = 1 - entropy

    # 5. финални тегла w_j (сума = 1)
    weights = (diversification / diversification.sum()).round(4)

    print("\nEntropy Method Weights")
    print("----------------------")
    print(f"cpuMark : {weights['cpuMark']}")
    print(f"price   : {weights['price']}")
    print(f"cores   : {weights['cores']}")



def define_classes_by_quantiles(df):
    "Определя класовете на процесорите чрез квартилно разпределение."

    labels = ["Бюджетен","Среден клас","Висок клас","Екстремен"]
    # Разделяне на cpuMark на 4 равни групи
    df = df.copy()
    df["performance_class"] = pd.qcut(df["cpuMark"],q=4,labels=labels)
    # Гранични стойности
    boundaries = df["cpuMark"].quantile([0.25, 0.50, 0.75]).round(0)

    print("\nQuantile Method")
    print("----------------------")
    print("Гранични стойности (cpuMark):")

    print(f"25% : {int(boundaries.loc[0.25])}")
    print(f"50% : {int(boundaries.loc[0.50])}")
    print(f"75% : {int(boundaries.loc[0.75])}")

    print("\nБрой процесори във всеки клас:")
    print(df["performance_class"].value_counts().sort_index())


def define_classes_by_kmeans(df, column: str = "cpuMark", k: int = 4):
    df = df.copy()
    values = df[[column]].values

    km = KMeans(n_clusters=4, random_state=42, n_init=10)
    raw_labels = km.fit_predict(values)
    # клъстерите от KMeans нямат гарантирана подредба -> сортираме центровете

    centers = km.cluster_centers_.flatten()
    order = np.argsort(centers)  # индекси на клъстерите, подредени по нарастващ cpuMark

    label_names = ["бюджетен", "среден клас", "висок клас", "екстремен"][:k]

    cluster_to_label = {
        cluster_id: label_names[rank]
        for rank, cluster_id in enumerate(order)
    }

    df["performance_class"] = [cluster_to_label[c] for c in raw_labels]
    # граници = средна точка между съседни центрове (за отчета/документацията)

    sorted_centers = np.sort(centers)

    boundaries = [(sorted_centers[i] + sorted_centers[i + 1]) / 2 for i in range(len(sorted_centers) - 1)]

    print("Приблизителни гранични стойности (cpuMark):", [round(b) for b in boundaries])
    print(df.groupby("performance_class")["cpuMark"].describe())