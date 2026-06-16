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

    modelSelect.innerHTML = '<option value="" data-i18n="choiceModel">Избери модел</option>';
    categorySelect.innerHTML = '<option value="" data-i18n="choiceCategory">Избери категория</option>';

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

    createOption(brands, brandSelect, false);
    createOption(models, modelSelect, false);
    createOption(categories, categorySelect, false);

    //event when choice brand
    brandSelect.addEventListener('change', function () {
        const selectedBrand = this.value;
        modelSelect.innerHTML = '<option value="" data-i18n="choiceModel">Избери модел</option>';
        categorySelect.innerHTML = '<option value="" data-i18n="choiceCategory">Избери категория</option>';

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

    //event whe choice model
    modelSelect.addEventListener('change', function () {
        const selectedModel = this.value;
        if (!selectedModel) return;

        categorySelect.innerHTML = '<option value="" data-i18n="choiceCategory">Избери категория</option>';
        const categories = getCategoryByModel(selectedModel, false);

        createOption(categories, categorySelect, false);
    });

    //After post request
    if (selectedBrand && selectedBrand !== "" && hasUserData) {
            brandSelect.value = selectedBrand;
            modelSelect.innerHTML = '<option value="" data-i18n="choiceModel">Избери модел</option>';
            categorySelect.innerHTML = '<option value="" data-i18n="choiceCategory">Избери категория</option>';
            let models = [];

            if (!selectedBrand || selectedBrand === 'Изберете марка на микропроцесора' || selectedBrand === 'Select microprocessor brand') {
                models = getModelsByBrand("", true);
            } else {
                models = getModelsByBrand(selectedBrand, false);
            }

            createOption(models, modelSelect, selectedModel);

            let categories = [];
            if (selectedModel)
                categories = getCategoryByModel(selectedModel, false);
            else
                categories = getCategoryByBrand(selectedBrand);

            createOption(categories, categorySelect, selectedCategory);
    }

    if (selectedModel && selectedModel !== "" && hasUserData) {
        categorySelect.innerHTML = '<option value="" data-i18n="choiceCategory">Избери категория</option>';
        const categories = getCategoryByModel(selectedModel, false);
        createOption(categories, categorySelect, selectedCategory);
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

        return [...new Set(data.filter(m => m.cpuName.split(" ")[0] === brand).map(d => d.cpuName))];
    }

    function getCategoryByModel(modelName, allCategories) {
        if(allCategories)
            return [...new Set(data.map(d => d.category))];

        return [...new Set(data.filter(d => d.cpuName === modelName).map(d => d.category))];
    }

    function getCategoryByBrand(brand) {
        return [...new Set(data.filter(d => d.brand === brand).map(d => d.category))];
    }
});







