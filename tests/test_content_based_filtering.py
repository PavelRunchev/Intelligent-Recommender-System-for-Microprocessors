from services.content_based_filtering import content_based_filtering
from data.data_preprocessing import clean_data

def test_content_base_filtering():
    df = clean_data()

    user_features = {
        "brand": [df["brand"].iloc[0]],
        "category": [df["category"].iloc[0]],
        "budget": 100000,
        "performance": 0,
        "cores": 1
    }

    result = content_based_filtering(user_features)

    assert result is not None
    assert not result.empty
