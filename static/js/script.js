window.addEventListener('DOMContentLoaded', function () {
    const data = JSON.parse(document.getElementById('data-json').textContent);
    const user = JSON.parse(document.getElementById('user-data').textContent || '{}');
    const hasUserData = user && Object.keys(user).length > 0;

    const selectedBrand = user?.brand || "";
    const selectedModel = user?.model || "";
    const selectedCategory = user?.category || "";

    const brandSelect = document.getElementById('brandSelect');
    const modelSelect = document.getElementById('modelSelect');
    const categorySelect = document.getElementById('categorySelect');

    modelSelect.innerHTML = getInitialOption("model")
    categorySelect.innerHTML = getInitialOption("category")

    let brands = [... new Set(data.map(d => d.cpuName.split(" ")[0]))];
    let models = [];
    let categories = [];

    if(!hasUserData) {
        models = getModelsByBrand("", true);
        categories = getCategoryByModel("", true);
    } else {
        models = getModelsByBrand(user.brand, false);
        categories = getCategoryByBrand(user.brand);
    }

    createOption(brands, brandSelect, selectedBrand);
    createOption(models, modelSelect, selectedModel);
    createOption(categories, categorySelect, selectedCategory);

    function getInitialOption(type) {
        const lang = localStorage.getItem("language") || "bg";
        if (type === "model") {
            if (lang === "bg")
                return '<option value="" data-i18n="choiceModel">Избери модел</option>';

            return '<option value="" data-i18n="choiceModel">Select model</option>';
        }

        if (type === "category") {
            if (lang === "bg")
                return '<option value="" data-i18n="choiceCategory">Избери категория</option>';

            return '<option value="" data-i18n="choiceCategory">Select category</option>';
        }

        if (type === "brand") {
            if (lang === "bg")
                return '<option value="" data-i18n="choiceBrand">Избери марка</option>';

            return '<option value="" data-i18n="choiceBrand">Select brand</option>';
        }
    }

    function getBrands() {
        return [...new Set(data.map(d => d.brand))]
    }

    //event when choice brand
    brandSelect.addEventListener('change', function () {
        const selectedBrand = this.value;
        modelSelect.innerHTML = getInitialOption("model");
        categorySelect.innerHTML = getInitialOption("category");

        const filteringModels = getModelsByBrand(selectedBrand, false);
        const filteringCategories = getCategoryByBrand(selectedBrand);

        if (!selectedBrand || selectedBrand === 'Изберете марка на микропроцесора' || selectedBrand === 'Select microprocessor brand') {
            models = getModelsByBrand("", true);
            categories = getCategoryByModel("", true);
            createOption(models, modelSelect, false);
            createOption(categories, categorySelect, false);
            return;
        }

        createOption(filteringModels, modelSelect, false);
        createOption(filteringCategories, categorySelect, false);
    });

    //event when choice model
    modelSelect.addEventListener('change', function () {
        const selectedModel = this.value;
        if (!selectedModel) return;

        categorySelect.innerHTML = getInitialOption("category");
        const categories = getCategoryByModel(selectedModel, false);
        createOption(categories, categorySelect, false);
    });

    // After POST request
    if (hasUserData) {
        brandSelect.innerHTML = getInitialOption("brand");
        modelSelect.innerHTML = getInitialOption("model");
        categorySelect.innerHTML = getInitialOption("category");

        const brands = getBrands();
        createOption(brands, brandSelect, selectedBrand.length === 1 ? selectedBrand[0] : null);

        let models;
        if (selectedBrand.length === 1) {
            models = getModelsByBrand(selectedBrand[0], false);
        } else if (selectedModel.length === 1) {
            models = getModelsByBrand("", true);
        } else {
            models = getModelsByBrand("", true);
        }

        createOption(models, modelSelect, selectedModel.length === 1 ? selectedModel[0] : null);

        let categories;
        if(selectedModel.length === 1){
            categories = getCategoryByModel(selectedModel[0], false);
        } else if(selectedBrand.length === 1){
            categories = getCategoryByBrand(selectedBrand[0]);
        } else {
            categories = getCategoryByModel("", true);
        }

        createOption(categories, categorySelect, selectedCategory.length === 1 ? selectedCategory[0] : null);
    }

    document.getElementById("resetBtn").addEventListener("click", function () {
        const form = document.querySelector("form");
        form.reset();

        form.querySelectorAll("input").forEach(i => {
            i.value = ""
        });
    });

    function createOption(arrayData, selectHTMLElement, selectedValue = null) {
        arrayData.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            if(item === selectedValue) opt.selected = true;
            selectHTMLElement.appendChild(opt);
        });
    }

    function getModelsByBrand(brand, allModels) {
        if(allModels)
            return [...new Set(data.map(d => d.cpuName))];

        if(Array.isArray(brand)){
            if(brand.length > 1)
                return [...new Set(data.map(d => d.cpuName))];

            brand = brand[0];
        }

        return [...new Set(data.filter(m => m.cpuName.split(" ")[0] === brand).map(d => d.cpuName))];
    }

    function getCategoryByModel(modelName, allCategories, brand) {
        if(allCategories)
            return [...new Set(data.map(d => d.category))];

        if(Array.isArray(brand)) {
            if(brand.length > 1)
                return [...new Set(data.map(d => d.category))];
        }

        return [...new Set(data.filter(d => d.cpuName === modelName).map(d => d.category))];
    }

    function getCategoryByBrand(brand) {
        if(Array.isArray(brand)) {
            if(brand.length > 1)
                return [...new Set(data.map(d => d.category))];

            brand = brand[0];
        }

        return [...new Set(data.filter(d => d.brand === brand).map(d => d.category))];
    }
});

