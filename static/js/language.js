
document.querySelectorAll(".language-option").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        const lang = this.dataset.value;
        const flag = this.dataset.flag;
        document.getElementById("selected-language").textContent = lang.toUpperCase();
        document.getElementById("selected-flag").src = flag;

        changeLanguage(lang);
        localStorage.setItem("language", lang);
    });
});

const savedLanguage = localStorage.getItem("language") || "bg";

const selected = document.querySelector(`.language-option[data-value="${savedLanguage}"]`);

if (selected) {
    document.getElementById("selected-language").textContent = selected.dataset.value.toUpperCase();
    document.getElementById("selected-flag").src = selected.dataset.flag;
    changeLanguage(savedLanguage);
}

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



