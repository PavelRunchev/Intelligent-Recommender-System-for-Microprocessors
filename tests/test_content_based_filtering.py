from services.content_based_filtering import content_based_filtering

def test_content_base_filtering():
    user_features = {
        "brand": ["AMD"],
        "model": ["AMD Ryzen 7 5800X"],
        "category": ["Desktop"],
        "budget": 500,
        "performance": 20000,
        "cores": 8
    }

    result = content_based_filtering(user_features)

    assert result is not None
    assert len(result) > 0
    assert  "Intel" not in result["brand"].values
    assert "AMD Ryzen 9 5900X" in result["cpuName"].values
