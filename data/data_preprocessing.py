from data.data_access import load_data

def extract_brand(cpu_name):
    if not isinstance(cpu_name, str) or cpu_name.strip() == '':
        return 'Unknown'
    return cpu_name.split()[0]


def clean_data():
    df = load_data()

    # remove None values (NaN)
    df = df.dropna(subset=['price', 'TDP'])

    # remove duplicate values
    df = df.drop_duplicates(subset=['cpuName'])

    # remove unknown values
    df = df[df['socket'] != 'unknown']
    df = df[df['category'] != 'Unknown']

    # missing value are replaced with the mean value
    df["threadMark"] = df["threadMark"].fillna(df["threadMark"].mean())

    # remove column testDate
    df = df.drop(columns=['testDate'], errors='ignore')

    # add new column brand
    df['brand'] = df['cpuName'].apply(extract_brand)
    df = df[df['brand'] != 'Unknown']

    #converting price from dollar to euro
    df['price'] = (df['price'] * 0.92).round(2)

    return df.reset_index(drop=True)


def get_top_cpus():
    df = clean_data()
    return df.sort_values(by='cpuMark', ascending=False).head(100)


def process_missing_values():
    df = load_data()

    print("Липсващи стойности по колони:")
    print(df.isnull().sum())

    df['price'] = df['price'].fillna(df['price'].mean())
    df['cpuValue'] = df['cpuValue'].fillna(df['cpuValue'].mean())
    df['threadValue'] = df['threadValue'].fillna(df['threadValue'].mean())
    df['TDP'] = df['TDP'].fillna(df['TDP'].mean())

    df['socket'] = df['socket'].fillna(df['socket'].mode()[0])
    df['category'] = df['category'].fillna(df['category'].mode()[0])

    return df




