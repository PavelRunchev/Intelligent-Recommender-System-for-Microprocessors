const translations = {
    bg: {
        navbarTitle: "Интелигентна система за препоръчване на микропроцесори",
        title: "Интелигентна система за препоръчване на микропроцесори",
        formTitle: "Форма за критерии на микропроцесорите",
        brand: "Марка на микропроцесора",
        choiceBrand: "Изберете марка на микропроцесора",
        model: "Модел на микропроцесора",
        choiceModel: "Избери модел",
        inputModelInfo: "Първо изберете марка на микропроцесора",
        category: "Категория на микропроцесора",
        choiceCategory: "Избери категория",
        inputCategoryInfo: "Първо изберете марката и модела на микропроцесора",
        budget: "Максимален бюджет",
        inputBudgetPlaceholder: "Например 500",
        inputBudgetInfo: "Въведете максимален бюджет в евро (€)",
        performance: "Минимална производителност",
        inputPerformancePlaceholder: "например 15 000",
        inputPerformanceInfo: "Стойност от бенчмарк (cpuMark) - по-голямо означава по-висока производителност",
        cores: "Минимален брой физически ядра",
        inputCoresPlaceholder: "например 2",
        inputCoresInfo: "Минимален брой ядра, които микропроцесора трябва да има",
        search: "Търси",
        reset: "Нулира",

        cardTitle: "Най-добър избор",
        cardPrice: "Цена",
        cardPerformance: "Производителност",
        cardCores: "Ядра",
        cardTDP: "TDP",
        cardEvaluationTopsis: "Оценка от TOPSIS",
        cardInfo: "* Резултатът показва най-балансирания микропроцесор според въведените критерии (цена, производителност и брой ядра), а не задължително най-мощния.",

        demoTitleTable: "Топ 100 Процесори:",
        demoInfoTable: "Сортирани по производителност (cpuMark) – по-високата стойност означава по-добра производителност",
        demoTableName: "Наименование",
        demoTablePrice: "Цена",
        demoTablePerformance: "Производителност",
        demoTablePerformanceInfo: "(по-високо е по-добре)",
        demoTableCores: "Ядра",
        demoTableTDP: "Топлинна мощност (TDP)",
        demoTableTDPInfo: "(по-ниско е по-добре)",
        demoTableCategory: "Категория",
        demoTableSocket: "Гнездо",

        titleResult: "Намерени Микропроцесори",
        performanceInfo: "(по-високо е по-добре)",
        evaluation: "Оценка",
        predictPrice: "Прогнозирана цена",
        priceEvaluation: "Ценова оценка",
        class: "Клас",
        evaluationTopsis: "Оценка TOPSIS",
        evaluationTOPSISinfo: "(oт 0 до 1)",

        noMatchCPUs: "Не са намерени микропроцесори, отговарящи на зададените критерии!",

        footerTitle: "© 2026 Интелигентна система за препоръчване на микропроцесори",
        footerDev: "Разработено от Павел Рунчев",
        team: "Студент от Технически Университет - Габрово"
    },

    en: {
        navbarTitle: "Intelligent Microprocessor Recommendation System",
        title: "Intelligent Microprocessor Recommendation System",
        formTitle: "Microprocessor Criteria Form",
        brand: "Processor Brand",
        choiceBrand: "Select processor brand",
        model: "Processor Model",
        choiceModel: "Select model",
        inputModelInfo: "Please select a processor brand first",
        category: "Processor Category",
        choiceCategory: "Select category",
        inputCategoryInfo: "Please select processor brand and model first",
        budget: "Maximum Budget",
        inputBudgetPlaceholder: "e.g. 500",
        inputBudgetInfo: "Enter maximum budget in euro (€)",
        performance: "Minimum Performance",
        inputPerformancePlaceholder: "e.g. 15,000",
        inputPerformanceInfo: "Benchmark value (cpuMark) – higher values indicate better performance",
        cores: "Minimum Number of Physical Cores",
        inputCoresPlaceholder: "e.g. 2",
        inputCoresInfo: "Minimum number of cores that the processor must have",
        search: "Search",
        reset: "Reset",

        cardTitle: "Best Choice",
        cardPrice: "Price",
        cardPerformance: "Performance",
        cardCores: "Cores",
        cardTDP: "TDP",
        cardEvaluationTopsis: "TOPSIS Score",
        cardInfo: "* The result shows the most balanced microprocessor according to the selected criteria (price, performance and number of cores), not necessarily the most powerful one.",

        demoTitleTable: "Top 100 Processors:",
        demoInfoTable: "Sorted by performance (cpuMark) – higher values indicate better performance",
        demoTableName: "Name",
        demoTablePrice: "Price",
        demoTablePerformance: "Performance",
        demoTablePerformanceInfo: "(higher is better)",
        demoTableCores: "Cores",
        demoTableTDP: "Thermal Design Power (TDP)",
        demoTableTDPInfo: "(lower is better)",
        demoTableCategory: "Category",
        demoTableSocket: "Socket",

        titleResult: "Matching Microprocessors",
        performanceInfo: "(higher is better)",
        evaluation: "Rating",
        predictPrice: "Predicted Price",
        priceEvaluation: "Price Rating",
        class: "Class",
        evaluationTopsis: "TOPSIS Score",
        evaluationTOPSISinfo: "(from 0 to 1)",

        noMatchCPUs: "No microprocessors found matching the specified criteria!",

        footerTitle: "© 2026 Intelligent Microprocessor Recommendation System",
        footerDev: "Developed by Pavel Runchev",
        team: "Student at Technical University of Gabrovo"
    }
};

const dynamicTranslations = {
    bg: {
        "Good Value": "Изгоден",
        "Overpriced": "Надценен",
        "Budget": "Бюджетен",
        "Mid-range": "Среден клас",
        "High-end": "Висок клас",
        "Extreme": "Екстремен"
    },
    en: {
        "Изгоден": "Good Value",
        "Надценен": "Overpriced",
        "Бюджетен": "Budget",
        "Среден клас": "Mid-range",
        "Висок клас": "High-end",
        "Екстремен": "Extreme"
    }
};

const translationPlaceholder = {
    bg: {
        budgetPlaceholder: "Например 500",
        performancePlaceholder: "Например 15 000",
        coresPlaceholder: "Например 2",
    },

    en: {
        budgetPlaceholder: "Example 500",
        performancePlaceholder: "Example 15 000",
        coresPlaceholder: "Example 2",
    }
};

const languageSelector = document.getElementById("language-selector");

languageSelector.addEventListener("change", function () {
        const selectedLanguage = this.value;

        changeLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
});

//Reloaded site
document.addEventListener("DOMContentLoaded", function () {
        const savedLanguage = localStorage.getItem("language") || "bg";
        document.getElementById("language-selector").value = savedLanguage;
        changeLanguage(savedLanguage);
});


function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key])
            element.textContent = translations[lang][key];
    });

    document.querySelectorAll("[data-placeholder-i18n]").forEach(element => {
       const key = element.dataset.placeholderI18n;
       if (translationPlaceholder[lang][key])
           element.placeholder = translationPlaceholder[lang][key];
    });

    document.querySelectorAll(".dynamic-translate").forEach(cell => {
        const value = cell.textContent.trim();

        if (dynamicTranslations[lang][value])
            cell.textContent = dynamicTranslations[lang][value];
    });
}