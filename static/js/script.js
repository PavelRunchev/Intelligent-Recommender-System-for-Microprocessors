window.addEventListener('DOMContentLoaded', function () {
    const data = JSON.parse(document.getElementById('data-json').textContent);
    const user = JSON.parse(document.getElementById('user-data').textContent || '{}');
<<<<<<< HEAD
    const hasUserData = user && Object.keys(user).length > 0;
=======
>>>>>>> 3c6bff1802aa9413b5e1a79d072f6bff96c4f76d

    const selectedBrand = user?.brand || "";
    const selectedModel = user?.model || "";
    const selectedCategory = user?.category || "";

    const brandSelect = document.getElementById('brandSelect');
    const modelSelect = document.getElementById('modelSelect');
    const categorySelect = document.getElementById('categorySelect');

    modelSelect.innerHTML = '<option value="" data-i18n="choiceModel">Избери модел</option>';
    categorySelect.innerHTML = '<option value="" data-i18n="choiceCategory">Избери категория</option>';

<<<<<<< HEAD
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
=======
    const brands = [... new Set(data.map(d => d.cpuName.split(" ")[0]))]
    let models = [...new Set(data.map(d => d.cpuName))];
    const categories = [...new Set(data.map(d => d.category))];

     brands.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b;
        opt.textContent = b;
        brandSelect.appendChild(opt);
    });

    models.forEach(model => {
        const opt = document.createElement('option');
        opt.value = model;
        opt.textContent = model;
        modelSelect.appendChild(opt);
    });

     categories.forEach(category => {
         const opt = document.createElement('option');
         opt.value = category;
         opt.textContent = category;
         categorySelect.appendChild(opt);
     });


    brandSelect.addEventListener('change', function () {
        const selectedBrand = this.value;
        if (!selectedBrand || selectedBrand === 'Изберете марка на микропроцесора' || selectedBrand === 'Select processor brand') return;

        modelSelect.innerHTML = '<option value="" data-i18n="choiceModel">Избери модел</option>';
        categorySelect.innerHTML = '<option value="" data-i18n="choiceCategory">Избери категория</option>';

        const filteringModels = [...new Set(models.filter(m => m.split(" ")[0] === selectedBrand))];
        const filteringCategories = [...new Set(data.filter(b => b.brand === selectedBrand).map(b => b.category))];

        filteringModels.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = m;
            modelSelect.appendChild(opt);
        });

        filteringCategories.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            categorySelect.appendChild(opt);
        });
    });

>>>>>>> 3c6bff1802aa9413b5e1a79d072f6bff96c4f76d
    modelSelect.addEventListener('change', function () {
        const selectedModel = this.value;
        if (!selectedModel) return;

        categorySelect.innerHTML = '<option value="" data-i18n="choiceCategory">Избери категория</option>';
<<<<<<< HEAD
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
=======

        const categories = [
            ...new Set(data.filter(d => d.cpuName === selectedModel).map(d => d.category))
        ];

        categories.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            categorySelect.appendChild(opt);
        });
    });



    if (selectedBrand && selectedBrand !== "") {
            brandSelect.value = selectedBrand;

            const models = [
                ...new Set(data.filter(d => d.brand === selectedBrand).map(d => d.cpuName))
            ];

            models.forEach(model => {
                const opt = document.createElement('option');
                opt.value = model;
                opt.textContent = model;

                if (model === selectedModel && opt.selected === false) opt.selected = true;

                modelSelect.appendChild(opt);
            });
    }

    if (selectedModel && selectedModel !== "") {
            const categories = [
                ...new Set(data.filter(d => d.cpuName === selectedModel).map(d => d.category))
            ];

            categories.forEach(c => {
                const opt = document.createElement('option');
                opt.value = c;
                opt.textContent = c;

                if (c === selectedCategory && opt.selected === false)
                    opt.selected = true;

                categorySelect.appendChild(opt);
            });
>>>>>>> 3c6bff1802aa9413b5e1a79d072f6bff96c4f76d
    }

    document.getElementById("resetBtn").addEventListener("click", function () {
        const form = document.querySelector("form");
        form.reset();

        form.querySelectorAll("input").forEach(i => {
            i.value = ""
        });
    });
<<<<<<< HEAD

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







=======
});


>>>>>>> 3c6bff1802aa9413b5e1a79d072f6bff96c4f76d
