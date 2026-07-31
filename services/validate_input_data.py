def validate_input(data, brand, model, category, budget, performance, cores):
    valid_brands = data["brand"].unique().tolist()
    valid_models = data["cpuName"].unique().tolist()
    valid_categories = data["category"].unique().tolist()

    if brand:
        if isinstance(brand, str):
            brand = [brand]
        if not all(b in valid_brands for b in brand):
            return None, "Invalid brand!"
    else:
        brand = []

    if model:
        if isinstance(model, str):
            model = [model]
        if not all(m in valid_models for m in model):
            return None, "Invalid model!"
    else:
        model = []

    if category:
        if isinstance(category, str):
            category = [category]
        if not all(c in valid_categories for c in category):
            return None, "Invalid category!"
    else:
        category = []

    if budget < 1 or budget > 100000:
        return None, "Invalid budget!"

    if performance < 1 or performance > 200000:
        return None, "Invalid performance!"

    if cores < 1 or cores > 100:
        return None, "Invalid cores!"

    return {"brand": brand,"model": model,"category": category,"budget": budget,"performance": performance,"cores": cores}, None