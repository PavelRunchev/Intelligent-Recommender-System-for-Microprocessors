from sklearn.cluster import KMeans
import numpy as np

def define_classes_by_kmeans(df, column: str ="cpuMark", k: int = 4):
    values = df[[column]].values
    km = KMeans(n_clusters=k,random_state=42,n_init=10)
    raw_labels = km.fit_predict(values)
    # клъстерите от KMeans нямат гарантирана подредба -> сортираме центровете
    centers = km.cluster_centers_.flatten()
    order = np.argsort(centers) # индекси на клъстерите, подредени по нарастващ cpuMark

    label_names = ["Бюджетен","Среден клас","Висок клас","Екстремен"][:k]

    cluster_to_label = {
        cluster_id: label_names[rank]
        for rank, cluster_id in enumerate(order)
    }

    performance_classes = [cluster_to_label[c] for c in raw_labels]
    # граници = средна точка между съседни центрове (за отчета/документацията)
    #sorted_centers = np.sort(centers)
    #boundaries = [(sorted_centers[i] + sorted_centers[i + 1]) / 2 for i in range(len(sorted_centers)-1)]
    return performance_classes

