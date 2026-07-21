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
        export: "Експорт",
        import: "Импорт",

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
        evaluation: "Препоръчителна оценка",
        predictPrice: "Прогнозирана цена",
        priceEvaluation: "Ценова оценка",
        class: "Клас",
        evaluationTopsis: "Оценка TOPSIS",
        evaluationTOPSISinfo: "(oт 0 до 1)",

        noMatchCPUs: "Не са намерени микропроцесори, отговарящи на зададените критерии!",

        footerTitle: "© 2026 Интелигентна система за препоръчване на микропроцесори",
        footerDev: "Разработено от Павел Рунчев",
        team: "Студент от Технически Университет - Габрово",

        //Import Translation
        selectCsvFile: "Моля, изберете CSV файл.",
        onlyCsvSupported: "Поддържат се само CSV файлове.",
        maximumFileSize: "Максималният размер на файла е 20 MB.",
        uploadingDataset: "Качване на набора от данни...",
        validatingDataset: "Проверка на набора от данни...",
        cleaningDataset: "Почистване на набора от данни...",
        convertingNumericValues: "Преобразуване на числовите стойности...",
        preparingDataset: "Подготовка на набора от данни...",
        datasetReady: "Наборът от данни е готов.",
        datasetUploadedSuccessfully: "Наборът от данни е качен успешно.",
        rowsUploaded: "Качени редове:",
        rowsAfterCleaning: "Редове след почистване:",
        removedRows: "Премахнати редове:",
        columns: "Колони:",
        detectedColumns: "Открити колони:",
        datasetValidationFailed: "Проверката на набора от данни е неуспешна.",
        missingRequiredColumns: "Липсващи задължителни колони:",
        importFailed: "Импортирането е неуспешно.",
        unexpectedServerError: "Неочаквана сървърна грешка.",

        importDataset: "Импортиране на набор от данни",
        importDescription: "Качете собствен CPU набор от данни във формат CSV.",

        importInfo1: "Поддържат се само CSV файлове.",
        importInfo2: "Каченият набор от данни не променя оригиналната база данни.",
        importInfo3: "Каченият набор от данни е достъпен само за текущата сесия.",
        importInfo4: "След приключване на сесията наборът от данни се премахва автоматично.",

        chooseDataset: "Изберете набор от данни",

        currency: "Валута",
        currencyEuro: "Евро (€)",
        currencyUSD: "Щатски долар ($)",
        currencyInfo: "Изберете валутата, използвана в импортирания набор от данни.",

        preparing: "Подготовка...",
        done: "Готово",
        restoreOriginalDataset: "Възстанови оригиналния набор от данни"
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
        export: "Export",
        import: "Import",

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
        evaluation: "Recommended rating",
        predictPrice: "Predicted Price",
        priceEvaluation: "Price Rating",
        class: "Class",
        evaluationTopsis: "TOPSIS Score",
        evaluationTOPSISinfo: "(from 0 to 1)",

        noMatchCPUs: "No microprocessors found matching the specified criteria!",

        footerTitle: "© 2026 Intelligent Microprocessor Recommendation System",
        footerDev: "Developed by Pavel Runchev",
        team: "Student at Technical University of Gabrovo",

        //Import Translation
        selectCsvFile: "Please select a CSV file.",
        onlyCsvSupported: "Only CSV files are supported.",
        maximumFileSize: "Maximum file size is 20 MB.",
        uploadingDataset: "Uploading dataset...",
        validatingDataset: "Validating dataset...",
        cleaningDataset: "Cleaning dataset...",
        convertingNumericValues: "Converting numeric values...",
        preparingDataset: "Preparing the dataset...",
        datasetReady: "Dataset is ready.",
        datasetUploadedSuccessfully: "Dataset uploaded successfully.",
        rowsUploaded: "Rows uploaded:",
        rowsAfterCleaning: "Rows after cleaning:",
        removedRows: "Removed rows:",
        columns: "Columns:",
        detectedColumns: "Detected columns:",
        datasetValidationFailed: "Dataset validation failed.",
        missingRequiredColumns: "Missing required columns:",
        importFailed: "Import failed.",
        unexpectedServerError: "Unexpected server error.",

        importDataset: "Import Dataset",
        importDescription: "Upload your own CPU dataset in CSV format.",

        importInfo1: "Only CSV files are supported.",
        importInfo2: "Your uploaded dataset does not modify the original database.",
        importInfo3: "The uploaded dataset is available only for your current session.",
        importInfo4: "After the session ends, the dataset is automatically removed.",

        chooseDataset: "Choose Dataset",

        currency: "Currency",
        currencyEuro: "Euro (€)",
        currencyUSD: "US Dollar ($)",
        currencyInfo: "Select the currency used in the imported dataset.",

        preparing: "Preparing...",
        done: "Done",
        restoreOriginalDataset: "Restore Original Dataset",
        datasetImported: "Dataset imported successfully.",
        defaultDatasetRestored: "Default dataset restored.",
    },

    de: {
        navbarTitle: "Intelligentes System zur Empfehlung von Mikroprozessoren",
        title: "Intelligentes System zur Empfehlung von Mikroprozessoren",
        formTitle: "Formular für Mikroprozessor-Kriterien",

        brand: "Prozessorhersteller",
        choiceBrand: "Prozessorhersteller auswählen",
        model: "Prozessormodell",
        choiceModel: "Modell auswählen",
        inputModelInfo: "Bitte zuerst einen Prozessorhersteller auswählen",
        category: "Prozessorkategorie",
        choiceCategory: "Kategorie auswählen",
        inputCategoryInfo: "Bitte zuerst Prozessorhersteller und Modell auswählen",
        budget: "Maximales Budget",
        inputBudgetPlaceholder: "z. B. 500",
        inputBudgetInfo: "Geben Sie das maximale Budget in Euro (€) ein",
        performance: "Minimale Leistung",
        inputPerformancePlaceholder: "z. B. 15.000",
        inputPerformanceInfo: "Benchmark-Wert (cpuMark) – höhere Werte bedeuten eine bessere Leistung",
        cores: "Minimale Anzahl physischer Kerne",
        inputCoresPlaceholder: "z. B. 2",
        inputCoresInfo: "Mindestanzahl an Kernen, die der Prozessor besitzen muss",
        search: "Suchen",
        reset: "Zurücksetzen",
        export: "Exportieren",
        import: "Importieren",

        cardTitle: "Beste Auswahl",
        cardPrice: "Preis",
        cardPerformance: "Leistung",
        cardCores: "Kerne",
        cardTDP: "TDP",
        cardEvaluationTopsis: "TOPSIS-Bewertung",
        cardInfo: "* Das Ergebnis zeigt den ausgewogensten Mikroprozessor anhand der ausgewählten Kriterien (Preis, Leistung und Anzahl der Kerne) und nicht unbedingt den leistungsstärksten.",

        demoTitleTable: "Top 100 Prozessoren:",
        demoInfoTable: "Nach Leistung sortiert (cpuMark) – höhere Werte bedeuten eine bessere Leistung",

        demoTableName: "Name",
        demoTablePrice: "Preis",
        demoTablePerformance: "Leistung",
        demoTablePerformanceInfo: "(höher ist besser)",

        demoTableCores: "Kerne",
        demoTableTDP: "Thermal Design Power (TDP)",
        demoTableTDPInfo: "(niedriger ist besser)",
        demoTableCategory: "Kategorie",
        demoTableSocket: "Sockel",

        titleResult: "Passende Mikroprozessoren",
        performanceInfo: "(höher ist besser)",
        evaluation: "Empfehlungsbewertung",
        predictPrice: "Vorhergesagter Preis",
        priceEvaluation: "Preisbewertung",
        class: "Klasse",
        evaluationTopsis: "TOPSIS-Bewertung",
        evaluationTOPSISinfo: "(von 0 bis 1)",

        noMatchCPUs: "Keine Mikroprozessoren gefunden, die den angegebenen Kriterien entsprechen!",

        footerTitle: "© 2026 Intelligentes System zur Empfehlung von Mikroprozessoren",
        footerDev: "Entwickelt von Pavel Runchev",
        team: "Student an der Technischen Universität Gabrovo",

        //Import Translation
        selectCsvFile: "Bitte wählen Sie eine CSV-Datei aus.",
        onlyCsvSupported: "Es werden nur CSV-Dateien unterstützt.",
        maximumFileSize: "Die maximale Dateigröße beträgt 20 MB.",
        uploadingDataset: "Datensatz wird hochgeladen...",
        validatingDataset: "Datensatz wird überprüft...",
        cleaningDataset: "Datensatz wird bereinigt...",
        convertingNumericValues: "Numerische Werte werden konvertiert...",
        preparingDataset: "Datensatz wird vorbereitet...",
        datasetReady: "Datensatz ist bereit.",
        datasetUploadedSuccessfully: "Datensatz erfolgreich hochgeladen.",
        rowsUploaded: "Hochgeladene Zeilen:",
        rowsAfterCleaning: "Zeilen nach der Bereinigung:",
        removedRows: "Entfernte Zeilen:",
        columns: "Spalten:",
        detectedColumns: "Erkannte Spalten:",
        datasetValidationFailed: "Datensatzprüfung fehlgeschlagen.",
        missingRequiredColumns: "Fehlende erforderliche Spalten:",
        importFailed: "Import fehlgeschlagen.",
        unexpectedServerError: "Unerwarteter Serverfehler.",

        importDataset: "Datensatz importieren",
        importDescription: "Laden Sie Ihren eigenen CPU-Datensatz im CSV-Format hoch.",

        importInfo1: "Es werden nur CSV-Dateien unterstützt.",
        importInfo2: "Der hochgeladene Datensatz verändert die ursprüngliche Datenbank nicht.",
        importInfo3: "Der hochgeladene Datensatz ist nur während Ihrer aktuellen Sitzung verfügbar.",
        importInfo4: "Nach Sitzungsende wird der Datensatz automatisch entfernt.",

        chooseDataset: "Datensatz auswählen",

        currency: "Währung",
        currencyEuro: "Euro (€)",
        currencyUSD: "US-Dollar ($)",
        currencyInfo: "Wählen Sie die im Datensatz verwendete Währung aus.",

        preparing: "Vorbereitung...",
        done: "Fertig",
        restoreOriginalDataset: "Originaldatensatz wiederherstellen"
    },

    es: {
        navbarTitle: "Sistema inteligente de recomendación de microprocesadores",
        title: "Sistema inteligente de recomendación de microprocesadores",
        formTitle: "Formulario de criterios del microprocesador",

        brand: "Fabricante del procesador",
        choiceBrand: "Seleccione el fabricante del procesador",
        model: "Modelo del procesador",
        choiceModel: "Seleccione el modelo",
        inputModelInfo: "Seleccione primero un fabricante del procesador",
        category: "Categoría del procesador",
        choiceCategory: "Seleccione una categoría",
        inputCategoryInfo: "Seleccione primero el fabricante y el modelo del procesador",
        budget: "Presupuesto máximo",
        inputBudgetPlaceholder: "ej. 500",
        inputBudgetInfo: "Introduzca el presupuesto máximo en euros (€)",
        performance: "Rendimiento mínimo",
        inputPerformancePlaceholder: "ej. 15.000",
        inputPerformanceInfo: "Valor de referencia (cpuMark) – valores más altos indican mejor rendimiento",
        cores: "Número mínimo de núcleos físicos",
        inputCoresPlaceholder: "ej. 2",
        inputCoresInfo: "Número mínimo de núcleos que debe tener el procesador",
        search: "Buscar",
        reset: "Restablecer",
        export: "Exportar",
        import: "Importar",

        cardTitle: "Mejor elección",
        cardPrice: "Precio",
        cardPerformance: "Rendimiento",
        cardCores: "Núcleos",
        cardTDP: "TDP",
        cardEvaluationTopsis: "Puntuación TOPSIS",
        cardInfo: "* El resultado muestra el microprocesador más equilibrado según los criterios seleccionados (precio, rendimiento y número de núcleos), no necesariamente el más potente.",

        demoTitleTable: "Top 100 procesadores:",
        demoInfoTable: "Ordenados por rendimiento (cpuMark) – valores más altos indican mejor rendimiento",

        demoTableName: "Nombre",
        demoTablePrice: "Precio",
        demoTablePerformance: "Rendimiento",
        demoTablePerformanceInfo: "(más alto es mejor)",

        demoTableCores: "Núcleos",
        demoTableTDP: "Potencia de diseño térmico (TDP)",
        demoTableTDPInfo: "(más bajo es mejor)",
        demoTableCategory: "Categoría",
        demoTableSocket: "Socket",

        titleResult: "Microprocesadores coincidentes",
        performanceInfo: "(más alto es mejor)",
        evaluation: "Valoración recomendada",
        predictPrice: "Precio predicho",
        priceEvaluation: "Valoración del precio",
        class: "Clase",
        evaluationTopsis: "Puntuación TOPSIS",
        evaluationTOPSISinfo: "(de 0 a 1)",

        noMatchCPUs: "¡No se encontraron microprocesadores que coincidan con los criterios especificados!",

        footerTitle: "© 2026 Sistema inteligente de recomendación de microprocesadores",
        footerDev: "Desarrollado por Pavel Runchev",
        team: "Estudiante de la Universidad Técnica de Gabrovo",

        //Import Translation
        selectCsvFile: "Seleccione un archivo CSV.",
        onlyCsvSupported: "Solo se admiten archivos CSV.",
        maximumFileSize: "El tamaño máximo del archivo es de 20 MB.",
        uploadingDataset: "Cargando conjunto de datos...",
        validatingDataset: "Validando el conjunto de datos...",
        cleaningDataset: "Limpiando el conjunto de datos...",
        convertingNumericValues: "Convirtiendo valores numéricos...",
        preparingDataset: "Preparando el conjunto de datos...",
        datasetReady: "El conjunto de datos está listo.",
        datasetUploadedSuccessfully: "Conjunto de datos cargado correctamente.",
        rowsUploaded: "Filas cargadas:",
        rowsAfterCleaning: "Filas después de la limpieza:",
        removedRows: "Filas eliminadas:",
        columns: "Columnas:",
        detectedColumns: "Columnas detectadas:",
        datasetValidationFailed: "La validación del conjunto de datos ha fallado.",
        missingRequiredColumns: "Faltan columnas obligatorias:",
        importFailed: "La importación ha fallado.",
        unexpectedServerError: "Error inesperado del servidor.",

        importDataset: "Importar conjunto de datos",
        importDescription: "Suba su propio conjunto de datos de CPU en formato CSV.",

        importInfo1: "Solo se admiten archivos CSV.",
        importInfo2: "El conjunto de datos cargado no modifica la base de datos original.",
        importInfo3: "El conjunto de datos cargado solo está disponible durante la sesión actual.",
        importInfo4: "Al finalizar la sesión, el conjunto de datos se elimina automáticamente.",

        chooseDataset: "Seleccionar conjunto de datos",

        currency: "Moneda",
        currencyEuro: "Euro (€)",
        currencyUSD: "Dólar estadounidense ($)",
        currencyInfo: "Seleccione la moneda utilizada en el conjunto de datos importado.",

        preparing: "Preparando...",
        done: "Listo",
        restoreOriginalDataset: "Restaurar el conjunto de datos original"
    },

    fr: {
        navbarTitle: "Système intelligent de recommandation de microprocesseurs",
        title: "Système intelligent de recommandation de microprocesseurs",
        formTitle: "Formulaire des critères du microprocesseur",

        brand: "Marque du microprocesseur",
        choiceBrand: "Choisissez une marque de microprocesseur",

        model: "Modèle du microprocesseur",
        choiceModel: "Choisir un modèle",
        inputModelInfo: "Veuillez d'abord sélectionner une marque de microprocesseur",

        category: "Catégorie du microprocesseur",
        choiceCategory: "Choisir une catégorie",
        inputCategoryInfo: "Veuillez d'abord sélectionner la marque et le modèle du microprocesseur",

        budget: "Budget maximal",
        inputBudgetPlaceholder: "Par exemple 500",
        inputBudgetInfo: "Saisissez le budget maximal en euros (€)",

        performance: "Performance minimale",
        inputPerformancePlaceholder: "Par exemple 15 000",
        inputPerformanceInfo: "Valeur du benchmark (cpuMark) — une valeur plus élevée signifie de meilleures performances",

        cores: "Nombre minimum de cœurs physiques",
        inputCoresPlaceholder: "Par exemple 2",
        inputCoresInfo: "Nombre minimum de cœurs que le microprocesseur doit posséder",

        search: "Rechercher",
        reset: "Réinitialiser",
        export: "Exporter",
        import: "Importer",

        cardTitle: "Meilleur choix",
        cardPrice: "Prix",
        cardPerformance: "Performance",
        cardCores: "Cœurs",
        cardTDP: "TDP",
        cardEvaluationTopsis: "Score TOPSIS",
        cardInfo: "* Le résultat présente le microprocesseur le plus équilibré selon les critères saisis (prix, performances et nombre de cœurs), et non nécessairement le plus puissant.",

        demoTitleTable: "Top 100 des processeurs :",
        demoInfoTable: "Classés par performance (cpuMark) – une valeur plus élevée indique de meilleures performances",
        demoTableName: "Nom",
        demoTablePrice: "Prix",
        demoTablePerformance: "Performance",
        demoTablePerformanceInfo: "(plus élevé est meilleur)",
        demoTableCores: "Cœurs",
        demoTableTDP: "Puissance thermique (TDP)",
        demoTableTDPInfo: "(plus faible est meilleur)",
        demoTableCategory: "Catégorie",
        demoTableSocket: "Socket",

        titleResult: "Microprocesseurs trouvés",
        performanceInfo: "(plus élevé est meilleur)",
        evaluation: "Évaluation recommandée",
        predictPrice: "Prix prédit",
        priceEvaluation: "Évaluation du prix",
        class: "Classe",
        evaluationTopsis: "Score TOPSIS",
        evaluationTOPSISinfo: "(de 0 à 1)",

        noMatchCPUs: "Aucun microprocesseur ne correspond aux critères sélectionnés !",

        footerTitle: "© 2026 Système intelligent de recommandation de microprocesseurs",
        footerDev: "Développé par Pavel Runchev",
        team: "Étudiant à l'Université Technique de Gabrovo",

        //Import Translation
        selectCsvFile: "Veuillez sélectionner un fichier CSV.",
        onlyCsvSupported: "Seuls les fichiers CSV sont pris en charge.",
        maximumFileSize: "La taille maximale du fichier est de 20 Mo.",
        uploadingDataset: "Téléchargement du jeu de données...",
        validatingDataset: "Validation du jeu de données...",
        cleaningDataset: "Nettoyage du jeu de données...",
        convertingNumericValues: "Conversion des valeurs numériques...",
        preparingDataset: "Préparation du jeu de données...",
        datasetReady: "Le jeu de données est prêt.",
        datasetUploadedSuccessfully: "Jeu de données téléchargé avec succès.",
        rowsUploaded: "Lignes téléchargées :",
        rowsAfterCleaning: "Lignes après nettoyage :",
        removedRows: "Lignes supprimées :",
        columns: "Colonnes :",
        detectedColumns: "Colonnes détectées :",
        datasetValidationFailed: "Échec de la validation du jeu de données.",
        missingRequiredColumns: "Colonnes obligatoires manquantes :",
        importFailed: "Échec de l'importation.",
        unexpectedServerError: "Erreur serveur inattendue.",

        importDataset: "Importer un jeu de données",
        importDescription: "Téléchargez votre propre jeu de données CPU au format CSV.",

        importInfo1: "Seuls les fichiers CSV sont pris en charge.",
        importInfo2: "Le jeu de données importé ne modifie pas la base de données d'origine.",
        importInfo3: "Le jeu de données importé est disponible uniquement pendant votre session actuelle.",
        importInfo4: "À la fin de la session, le jeu de données est automatiquement supprimé.",

        chooseDataset: "Choisir un jeu de données",

        currency: "Devise",
        currencyEuro: "Euro (€)",
        currencyUSD: "Dollar américain ($)",
        currencyInfo: "Sélectionnez la devise utilisée dans le jeu de données importé.",

        preparing: "Préparation...",
        done: "Terminé",
        restoreOriginalDataset: "Restaurer le jeu de données d'origine"
    },

        it: {
        navbarTitle: "Sistema intelligente di raccomandazione dei microprocessori",
        title: "Sistema intelligente di raccomandazione dei microprocessori",
        formTitle: "Modulo dei criteri del microprocessore",

        brand: "Marca del microprocessore",
        choiceBrand: "Seleziona la marca del microprocessore",

        model: "Modello del microprocessore",
        choiceModel: "Seleziona un modello",
        inputModelInfo: "Seleziona prima una marca di microprocessore",

        category: "Categoria del microprocessore",
        choiceCategory: "Seleziona una categoria",
        inputCategoryInfo: "Seleziona prima la marca e il modello del microprocessore",

        budget: "Budget massimo",
        inputBudgetPlaceholder: "Ad esempio 500",
        inputBudgetInfo: "Inserisci il budget massimo in euro (€)",

        performance: "Prestazioni minime",
        inputPerformancePlaceholder: "Ad esempio 15 000",
        inputPerformanceInfo: "Valore del benchmark (cpuMark) – un valore più alto indica prestazioni migliori",

        cores: "Numero minimo di core fisici",
        inputCoresPlaceholder: "Ad esempio 2",
        inputCoresInfo: "Numero minimo di core che il microprocessore deve avere",

        search: "Cerca",
        reset: "Reimposta",
        export: "Esporta",
        import: "Importa",

        cardTitle: "Migliore scelta",
        cardPrice: "Prezzo",
        cardPerformance: "Prestazioni",
        cardCores: "Core",
        cardTDP: "TDP",
        cardEvaluationTopsis: "Punteggio TOPSIS",
        cardInfo: "* Il risultato mostra il microprocessore più equilibrato in base ai criteri inseriti (prezzo, prestazioni e numero di core), non necessariamente il più potente.",

        demoTitleTable: "Top 100 Processori:",
        demoInfoTable: "Ordinati per prestazioni (cpuMark) – un valore più alto indica prestazioni migliori",
        demoTableName: "Nome",
        demoTablePrice: "Prezzo",
        demoTablePerformance: "Prestazioni",
        demoTablePerformanceInfo: "(più alto è meglio)",
        demoTableCores: "Core",
        demoTableTDP: "Potenza termica (TDP)",
        demoTableTDPInfo: "(più basso è meglio)",
        demoTableCategory: "Categoria",
        demoTableSocket: "Socket",

        titleResult: "Microprocessori trovati",
        performanceInfo: "(più alto è meglio)",
        evaluation: "Valutazione consigliata",
        predictPrice: "Prezzo previsto",
        priceEvaluation: "Valutazione del prezzo",
        class: "Classe",
        evaluationTopsis: "Punteggio TOPSIS",
        evaluationTOPSISinfo: "(da 0 a 1)",

        noMatchCPUs: "Non sono stati trovati microprocessori che soddisfano i criteri selezionati!",

        footerTitle: "© 2026 Sistema intelligente di raccomandazione dei microprocessori",
        footerDev: "Sviluppato da Pavel Runchev",
        team: "Studente dell'Università Tecnica di Gabrovo",

         //Import Translation
        selectCsvFile: "Seleziona un file CSV.",
        onlyCsvSupported: "Sono supportati solo i file CSV.",
        maximumFileSize: "La dimensione massima del file è 20 MB.",
        uploadingDataset: "Caricamento del dataset...",
        validatingDataset: "Verifica del dataset...",
        cleaningDataset: "Pulizia del dataset...",
        convertingNumericValues: "Conversione dei valori numerici...",
        preparingDataset: "Preparazione del dataset...",
        datasetReady: "Il dataset è pronto.",
        datasetUploadedSuccessfully: "Dataset caricato con successo.",
        rowsUploaded: "Righe caricate:",
        rowsAfterCleaning: "Righe dopo la pulizia:",
        removedRows: "Righe rimosse:",
        columns: "Colonne:",
        detectedColumns: "Colonne rilevate:",
        datasetValidationFailed: "Verifica del dataset non riuscita.",
        missingRequiredColumns: "Colonne obbligatorie mancanti:",
        importFailed: "Importazione non riuscita.",
        unexpectedServerError: "Errore imprevisto del server.",

        importDataset: "Importa dataset",
        importDescription: "Carica il tuo dataset CPU in formato CSV.",

        importInfo1: "Sono supportati solo file CSV.",
        importInfo2: "Il dataset caricato non modifica il database originale.",
        importInfo3: "Il dataset caricato è disponibile solo durante la sessione corrente.",
        importInfo4: "Al termine della sessione il dataset viene rimosso automaticamente.",

        chooseDataset: "Seleziona dataset",

        currency: "Valuta",
        currencyEuro: "Euro (€)",
        currencyUSD: "Dollaro statunitense ($)",
        currencyInfo: "Seleziona la valuta utilizzata nel dataset importato.",

        preparing: "Preparazione...",
        done: "Fatto",
        restoreOriginalDataset: "Ripristina il dataset originale"
    },

    ru: {
        navbarTitle: "Интеллектуальная система рекомендаций микропроцессоров",
        title: "Интеллектуальная система рекомендаций микропроцессоров",
        formTitle: "Форма критериев микропроцессора",

        brand: "Производитель микропроцессора",
        choiceBrand: "Выберите производителя микропроцессора",

        model: "Модель микропроцессора",
        choiceModel: "Выберите модель",
        inputModelInfo: "Сначала выберите производителя микропроцессора",

        category: "Категория микропроцессора",
        choiceCategory: "Выберите категорию",
        inputCategoryInfo: "Сначала выберите производителя и модель микропроцессора",

        budget: "Максимальный бюджет",
        inputBudgetPlaceholder: "Например 500",
        inputBudgetInfo: "Введите максимальный бюджет в евро (€)",

        performance: "Минимальная производительность",
        inputPerformancePlaceholder: "Например 15 000",
        inputPerformanceInfo: "Значение теста производительности (cpuMark) — более высокое значение означает более высокую производительность",

        cores: "Минимальное количество физических ядер",
        inputCoresPlaceholder: "Например 2",
        inputCoresInfo: "Минимальное количество ядер, которое должен иметь микропроцессор",

        search: "Поиск",
        reset: "Сброс",
        export: "Экспорт",
        import: "Импорт",

        cardTitle: "Лучший выбор",
        cardPrice: "Цена",
        cardPerformance: "Производительность",
        cardCores: "Ядра",
        cardTDP: "TDP",
        cardEvaluationTopsis: "Оценка TOPSIS",
        cardInfo: "* Результат показывает наиболее сбалансированный микропроцессор в соответствии с введёнными критериями (цена, производительность и количество ядер), а не обязательно самый мощный.",

        demoTitleTable: "Топ 100 процессоров:",
        demoInfoTable: "Отсортированы по производительности (cpuMark) — более высокое значение означает лучшую производительность",
        demoTableName: "Наименование",
        demoTablePrice: "Цена",
        demoTablePerformance: "Производительность",
        demoTablePerformanceInfo: "(чем выше, тем лучше)",
        demoTableCores: "Ядра",
        demoTableTDP: "Тепловая мощность (TDP)",
        demoTableTDPInfo: "(чем ниже, тем лучше)",
        demoTableCategory: "Категория",
        demoTableSocket: "Сокет",

        titleResult: "Найденные микропроцессоры",
        performanceInfo: "(чем выше, тем лучше)",
        evaluation: "Рекомендуемая оценка",
        predictPrice: "Прогнозируемая цена",
        priceEvaluation: "Оценка цены",
        class: "Класс",
        evaluationTopsis: "Оценка TOPSIS",
        evaluationTOPSISinfo: "(от 0 до 1)",

        noMatchCPUs: "Не найдено микропроцессоров, соответствующих заданным критериям!",

        footerTitle: "© 2026 Интеллектуальная система рекомендаций микропроцессоров",
        footerDev: "Разработано Павлом Рунчевым",
        team: "Студент Технического университета — Габрово",

        //Import Translation
        selectCsvFile: "Выберите CSV-файл.",
        onlyCsvSupported: "Поддерживаются только CSV-файлы.",
        maximumFileSize: "Максимальный размер файла — 20 МБ.",
        uploadingDataset: "Загрузка набора данных...",
        validatingDataset: "Проверка набора данных...",
        cleaningDataset: "Очистка набора данных...",
        convertingNumericValues: "Преобразование числовых значений...",
        preparingDataset: "Подготовка набора данных...",
        datasetReady: "Набор данных готов.",
        datasetUploadedSuccessfully: "Набор данных успешно загружен.",
        rowsUploaded: "Загружено строк:",
        rowsAfterCleaning: "Строк после очистки:",
        removedRows: "Удалено строк:",
        columns: "Столбцы:",
        detectedColumns: "Обнаруженные столбцы:",
        datasetValidationFailed: "Проверка набора данных не выполнена.",
        missingRequiredColumns: "Отсутствуют обязательные столбцы:",
        importFailed: "Ошибка импорта.",
        unexpectedServerError: "Непредвиденная ошибка сервера.",

        importDataset: "Импорт набора данных",
        importDescription: "Загрузите собственный набор данных CPU в формате CSV.",

        importInfo1: "Поддерживаются только CSV-файлы.",
        importInfo2: "Загруженный набор данных не изменяет исходную базу данных.",
        importInfo3: "Загруженный набор данных доступен только в течение текущей сессии.",
        importInfo4: "После завершения сессии набор данных автоматически удаляется.",

        chooseDataset: "Выберите набор данных",

        currency: "Валюта",
        currencyEuro: "Евро (€)",
        currencyUSD: "Доллар США ($)",
        currencyInfo: "Выберите валюту, используемую в импортируемом наборе данных.",

        preparing: "Подготовка...",
        done: "Готово",
        restoreOriginalDataset: "Восстановить исходный набор данных"
    },

    pt: {
        navbarTitle: "Sistema Inteligente de Recomendação de Microprocessadores",
        title: "Sistema Inteligente de Recomendação de Microprocessadores",
        formTitle: "Formulário de Critérios do Microprocessador",

        brand: "Marca do microprocessador",
        choiceBrand: "Selecione a marca do microprocessador",

        model: "Modelo do microprocessador",
        choiceModel: "Selecione um modelo",
        inputModelInfo: "Primeiro selecione a marca do microprocessador",

        category: "Categoria do microprocessador",
        choiceCategory: "Selecione uma categoria",
        inputCategoryInfo: "Primeiro selecione a marca e o modelo do microprocessador",

        budget: "Orçamento máximo",
        inputBudgetPlaceholder: "Por exemplo 500",
        inputBudgetInfo: "Introduza o orçamento máximo em euros (€)",

        performance: "Desempenho mínimo",
        inputPerformancePlaceholder: "Por exemplo 15 000",
        inputPerformanceInfo: "Valor do benchmark (cpuMark) – um valor mais elevado indica melhor desempenho",

        cores: "Número mínimo de núcleos físicos",
        inputCoresPlaceholder: "Por exemplo 2",
        inputCoresInfo: "Número mínimo de núcleos que o microprocessador deve possuir",

        search: "Pesquisar",
        reset: "Repor",
        export: "Exportar",
        import: "Importar",

        cardTitle: "Melhor escolha",
        cardPrice: "Preço",
        cardPerformance: "Desempenho",
        cardCores: "Núcleos",
        cardTDP: "TDP",
        cardEvaluationTopsis: "Pontuação TOPSIS",
        cardInfo: "* O resultado apresenta o microprocessador mais equilibrado de acordo com os critérios introduzidos (preço, desempenho e número de núcleos), e não necessariamente o mais potente.",

        demoTitleTable: "Top 100 Processadores:",
        demoInfoTable: "Ordenados por desempenho (cpuMark) – um valor mais elevado indica melhor desempenho",
        demoTableName: "Nome",
        demoTablePrice: "Preço",
        demoTablePerformance: "Desempenho",
        demoTablePerformanceInfo: "(quanto maior, melhor)",
        demoTableCores: "Núcleos",
        demoTableTDP: "Potência térmica (TDP)",
        demoTableTDPInfo: "(quanto menor, melhor)",
        demoTableCategory: "Categoria",
        demoTableSocket: "Socket",

        titleResult: "Microprocessadores encontrados",
        performanceInfo: "(quanto maior, melhor)",
        evaluation: "Avaliação recomendada",
        predictPrice: "Preço previsto",
        priceEvaluation: "Avaliação do preço",
        class: "Classe",
        evaluationTopsis: "Pontuação TOPSIS",
        evaluationTOPSISinfo: "(de 0 a 1)",

        noMatchCPUs: "Não foram encontrados microprocessadores que correspondam aos critérios selecionados!",

        footerTitle: "© 2026 Sistema Inteligente de Recomendação de Microprocessadores",
        footerDev: "Desenvolvido por Pavel Runchev",
        team: "Estudante da Universidade Técnica de Gabrovo",

        //Import Translation
        selectCsvFile: "Selecione um ficheiro CSV.",
        onlyCsvSupported: "Apenas ficheiros CSV são suportados.",
        maximumFileSize: "O tamanho máximo do ficheiro é 20 MB.",
        uploadingDataset: "A carregar o conjunto de dados...",
        validatingDataset: "A validar o conjunto de dados...",
        cleaningDataset: "A limpar o conjunto de dados...",
        convertingNumericValues: "A converter valores numéricos...",
        preparingDataset: "A preparar o conjunto de dados...",
        datasetReady: "O conjunto de dados está pronto.",
        datasetUploadedSuccessfully: "Conjunto de dados carregado com sucesso.",
        rowsUploaded: "Linhas carregadas:",
        rowsAfterCleaning: "Linhas após a limpeza:",
        removedRows: "Linhas removidas:",
        columns: "Colunas:",
        detectedColumns: "Colunas detetadas:",
        datasetValidationFailed: "Falha na validação do conjunto de dados.",
        missingRequiredColumns: "Colunas obrigatórias em falta:",
        importFailed: "Falha na importação.",
        unexpectedServerError: "Erro inesperado do servidor.",

        importDataset: "Importar conjunto de dados",
        importDescription: "Carregue o seu próprio conjunto de dados de CPU em formato CSV.",

        importInfo1: "Apenas ficheiros CSV são suportados.",
        importInfo2: "O conjunto de dados carregado não altera a base de dados original.",
        importInfo3: "O conjunto de dados carregado está disponível apenas durante a sessão atual.",
        importInfo4: "Após o fim da sessão, o conjunto de dados é removido automaticamente.",

        chooseDataset: "Selecionar conjunto de dados",

        currency: "Moeda",
        currencyEuro: "Euro (€)",
        currencyUSD: "Dólar americano ($)",
        currencyInfo: "Selecione a moeda utilizada no conjunto de dados importado.",

        preparing: "A preparar...",
        done: "Concluído",
        restoreOriginalDataset: "Restaurar conjunto de dados original"
    },

    zh: {
        navbarTitle: "智能微处理器推荐系统",
        title: "智能微处理器推荐系统",
        formTitle: "微处理器筛选条件",

        brand: "微处理器品牌",
        choiceBrand: "请选择微处理器品牌",

        model: "微处理器型号",
        choiceModel: "请选择型号",
        inputModelInfo: "请先选择微处理器品牌",

        category: "微处理器类别",
        choiceCategory: "请选择类别",
        inputCategoryInfo: "请先选择微处理器品牌和型号",

        budget: "最高预算",
        inputBudgetPlaceholder: "例如 500",
        inputBudgetInfo: "请输入最高预算（欧元 €）",

        performance: "最低性能",
        inputPerformancePlaceholder: "例如 15 000",
        inputPerformanceInfo: "基准测试（cpuMark）数值——数值越高表示性能越好",

        cores: "最少物理核心数",
        inputCoresPlaceholder: "例如 2",
        inputCoresInfo: "微处理器所需的最少物理核心数",

        search: "搜索",
        reset: "重置",
        export: "导出",
        import: "导入",

        cardTitle: "最佳选择",
        cardPrice: "价格",
        cardPerformance: "性能",
        cardCores: "核心数",
        cardTDP: "TDP",
        cardEvaluationTopsis: "TOPSIS 评分",
        cardInfo: "* 结果显示的是根据输入条件（价格、性能和核心数）综合评估后最均衡的微处理器，而不一定是性能最强的。",

        demoTitleTable: "前 100 名处理器：",
        demoInfoTable: "按性能（cpuMark）排序——数值越高表示性能越好",
        demoTableName: "名称",
        demoTablePrice: "价格",
        demoTablePerformance: "性能",
        demoTablePerformanceInfo: "（越高越好）",
        demoTableCores: "核心数",
        demoTableTDP: "热设计功耗 (TDP)",
        demoTableTDPInfo: "（越低越好）",
        demoTableCategory: "类别",
        demoTableSocket: "插槽",

        titleResult: "找到的微处理器",
        performanceInfo: "（越高越好）",
        evaluation: "推荐评分",
        predictPrice: "预测价格",
        priceEvaluation: "价格评价",
        class: "类别",
        evaluationTopsis: "TOPSIS 评分",
        evaluationTOPSISinfo: "（0 到 1）",

        noMatchCPUs: "未找到符合所选条件的微处理器！",

        footerTitle: "© 2026 智能微处理器推荐系统",
        footerDev: "开发者：Pavel Runchev",
        team: "加布罗沃技术大学学生",

        //Import Translation
        selectCsvFile: "请选择一个 CSV 文件。",
        onlyCsvSupported: "仅支持 CSV 文件。",
        maximumFileSize: "文件最大大小为 20 MB。",
        uploadingDataset: "正在上传数据集...",
        validatingDataset: "正在验证数据集...",
        cleaningDataset: "正在清理数据集...",
        convertingNumericValues: "正在转换数值...",
        preparingDataset: "正在准备数据集...",
        datasetReady: "数据集已准备就绪。",
        datasetUploadedSuccessfully: "数据集上传成功。",
        rowsUploaded: "上传的行数：",
        rowsAfterCleaning: "清理后的行数：",
        removedRows: "已删除的行数：",
        columns: "列数：",
        detectedColumns: "检测到的列：",
        datasetValidationFailed: "数据集验证失败。",
        missingRequiredColumns: "缺少必需的列：",
        importFailed: "导入失败。",
        unexpectedServerError: "发生意外的服务器错误。",

        importDataset: "导入数据集",
        importDescription: "上传您自己的 CSV 格式 CPU 数据集。",

        importInfo1: "仅支持 CSV 文件。",
        importInfo2: "上传的数据集不会修改原始数据库。",
        importInfo3: "上传的数据集仅在当前会话期间可用。",
        importInfo4: "会话结束后，数据集将自动删除。",

        chooseDataset: "选择数据集",

        currency: "货币",
        currencyEuro: "欧元 (€)",
        currencyUSD: "美元 ($)",
        currencyInfo: "请选择导入数据集所使用的货币。",

        preparing: "准备中...",
        done: "完成",
        restoreOriginalDataset: "恢复原始数据集"
    },

    ja: {
        navbarTitle: "インテリジェント・マイクロプロセッサ推奨システム",
        title: "インテリジェント・マイクロプロセッサ推奨システム",
        formTitle: "マイクロプロセッサの条件設定",

        brand: "マイクロプロセッサのメーカー",
        choiceBrand: "メーカーを選択してください",

        model: "マイクロプロセッサのモデル",
        choiceModel: "モデルを選択してください",
        inputModelInfo: "最初にメーカーを選択してください",

        category: "マイクロプロセッサのカテゴリ",
        choiceCategory: "カテゴリを選択してください",
        inputCategoryInfo: "最初にメーカーとモデルを選択してください",

        budget: "最大予算",
        inputBudgetPlaceholder: "例：500",
        inputBudgetInfo: "最大予算（ユーロ €）を入力してください",

        performance: "最低性能",
        inputPerformancePlaceholder: "例：15 000",
        inputPerformanceInfo: "ベンチマーク（cpuMark）の値 ― 数値が高いほど性能が高くなります",

        cores: "最小物理コア数",
        inputCoresPlaceholder: "例：2",
        inputCoresInfo: "必要な最小物理コア数",

        search: "検索",
        reset: "リセット",
        export: "エクスポート",
        import: "インポート",

        cardTitle: "おすすめ",
        cardPrice: "価格",
        cardPerformance: "性能",
        cardCores: "コア数",
        cardTDP: "TDP",
        cardEvaluationTopsis: "TOPSIS評価",
        cardInfo: "* 結果は、入力した条件（価格、性能、コア数）に基づいて最もバランスの取れたマイクロプロセッサを示しており、必ずしも最も高性能な製品ではありません。",

        demoTitleTable: "プロセッサ トップ100：",
        demoInfoTable: "性能（cpuMark）の順に並べ替え ― 数値が高いほど性能が優れています",
        demoTableName: "名称",
        demoTablePrice: "価格",
        demoTablePerformance: "性能",
        demoTablePerformanceInfo: "（高いほど良い）",
        demoTableCores: "コア数",
        demoTableTDP: "熱設計電力（TDP）",
        demoTableTDPInfo: "（低いほど良い）",
        demoTableCategory: "カテゴリ",
        demoTableSocket: "ソケット",

        titleResult: "検索結果",
        performanceInfo: "（高いほど良い）",
        evaluation: "推奨評価",
        predictPrice: "予測価格",
        priceEvaluation: "価格評価",
        class: "クラス",
        evaluationTopsis: "TOPSIS評価",
        evaluationTOPSISinfo: "（0～1）",

        noMatchCPUs: "条件に一致するマイクロプロセッサは見つかりませんでした。",

        footerTitle: "© 2026 インテリジェント・マイクロプロセッサ推奨システム",
        footerDev: "開発者：Pavel Runchev",
        team: "ガブロヴォ工科大学 学生",

        //Import Translation
        selectCsvFile: "CSVファイルを選択してください。",
        onlyCsvSupported: "CSVファイルのみ対応しています。",
        maximumFileSize: "ファイルの最大サイズは20MBです。",
        uploadingDataset: "データセットをアップロードしています...",
        validatingDataset: "データセットを検証しています...",
        cleaningDataset: "データセットをクリーンアップしています...",
        convertingNumericValues: "数値を変換しています...",
        preparingDataset: "データセットを準備しています...",
        datasetReady: "データセットの準備が完了しました。",
        datasetUploadedSuccessfully: "データセットが正常にアップロードされました。",
        rowsUploaded: "アップロードされた行数：",
        rowsAfterCleaning: "クリーニング後の行数：",
        removedRows: "削除された行数：",
        columns: "列数：",
        detectedColumns: "検出された列：",
        datasetValidationFailed: "データセットの検証に失敗しました。",
        missingRequiredColumns: "必須列が不足しています：",
        importFailed: "インポートに失敗しました。",
        unexpectedServerError: "予期しないサーバーエラーが発生しました。",

        importDataset: "データセットをインポート",
        importDescription: "CSV形式のCPUデータセットをアップロードしてください。",

        importInfo1: "CSVファイルのみ対応しています。",
        importInfo2: "アップロードしたデータセットは元のデータベースを変更しません。",
        importInfo3: "アップロードしたデータセットは現在のセッションでのみ利用できます。",
        importInfo4: "セッション終了後、データセットは自動的に削除されます。",

        chooseDataset: "データセットを選択",

        currency: "通貨",
        currencyEuro: "ユーロ (€)",
        currencyUSD: "米ドル ($)",
        currencyInfo: "インポートするデータセットで使用されている通貨を選択してください。",

        preparing: "準備中...",
        done: "完了",
        restoreOriginalDataset: "元のデータセットを復元"
    },

    el: {
        navbarTitle: "Έξυπνο Σύστημα Σύστασης Μικροεπεξεργαστών",
        title: "Έξυπνο Σύστημα Σύστασης Μικροεπεξεργαστών",
        formTitle: "Φόρμα Κριτηρίων Μικροεπεξεργαστή",

        brand: "Κατασκευαστής μικροεπεξεργαστή",
        choiceBrand: "Επιλέξτε κατασκευαστή μικροεπεξεργαστή",

        model: "Μοντέλο μικροεπεξεργαστή",
        choiceModel: "Επιλέξτε μοντέλο",
        inputModelInfo: "Πρώτα επιλέξτε κατασκευαστή μικροεπεξεργαστή",

        category: "Κατηγορία μικροεπεξεργαστή",
        choiceCategory: "Επιλέξτε κατηγορία",
        inputCategoryInfo: "Πρώτα επιλέξτε κατασκευαστή και μοντέλο μικροεπεξεργαστή",

        budget: "Μέγιστος προϋπολογισμός",
        inputBudgetPlaceholder: "Για παράδειγμα 500",
        inputBudgetInfo: "Εισαγάγετε τον μέγιστο προϋπολογισμό σε ευρώ (€)",

        performance: "Ελάχιστη απόδοση",
        inputPerformancePlaceholder: "Για παράδειγμα 15 000",
        inputPerformanceInfo: "Τιμή benchmark (cpuMark) – όσο μεγαλύτερη η τιμή, τόσο καλύτερη η απόδοση",

        cores: "Ελάχιστος αριθμός φυσικών πυρήνων",
        inputCoresPlaceholder: "Για παράδειγμα 2",
        inputCoresInfo: "Ο ελάχιστος αριθμός πυρήνων που πρέπει να διαθέτει ο μικροεπεξεργαστής",

        search: "Αναζήτηση",
        reset: "Επαναφορά",
        export: "Εξαγωγή",
        import: "Εισαγωγή",

        cardTitle: "Καλύτερη επιλογή",
        cardPrice: "Τιμή",
        cardPerformance: "Απόδοση",
        cardCores: "Πυρήνες",
        cardTDP: "TDP",
        cardEvaluationTopsis: "Βαθμολογία TOPSIS",
        cardInfo: "* Το αποτέλεσμα παρουσιάζει τον πιο ισορροπημένο μικροεπεξεργαστή σύμφωνα με τα επιλεγμένα κριτήρια (τιμή, απόδοση και αριθμός πυρήνων), όχι απαραίτητα τον ισχυρότερο.",

        demoTitleTable: "100 Κορυφαίοι Επεξεργαστές:",
        demoInfoTable: "Ταξινομημένοι κατά απόδοση (cpuMark) – όσο μεγαλύτερη η τιμή, τόσο καλύτερη η απόδοση",
        demoTableName: "Όνομα",
        demoTablePrice: "Τιμή",
        demoTablePerformance: "Απόδοση",
        demoTablePerformanceInfo: "(όσο μεγαλύτερη τόσο καλύτερα)",
        demoTableCores: "Πυρήνες",
        demoTableTDP: "Θερμική Ισχύς (TDP)",
        demoTableTDPInfo: "(όσο μικρότερη τόσο καλύτερα)",
        demoTableCategory: "Κατηγορία",
        demoTableSocket: "Υποδοχή",

        titleResult: "Βρέθηκαν Μικροεπεξεργαστές",
        performanceInfo: "(όσο μεγαλύτερη τόσο καλύτερα)",
        evaluation: "Προτεινόμενη αξιολόγηση",
        predictPrice: "Προβλεπόμενη τιμή",
        priceEvaluation: "Αξιολόγηση τιμής",
        class: "Κατηγορία",
        evaluationTopsis: "Βαθμολογία TOPSIS",
        evaluationTOPSISinfo: "(από 0 έως 1)",

        noMatchCPUs: "Δεν βρέθηκαν μικροεπεξεργαστές που να πληρούν τα επιλεγμένα κριτήρια!",

        footerTitle: "© 2026 Έξυπνο Σύστημα Σύστασης Μικροεπεξεργαστών",
        footerDev: "Αναπτύχθηκε από τον Pavel Runchev",
        team: "Φοιτητής του Τεχνικού Πανεπιστημίου Γκάμπροβο",

        //Import Translation
        selectCsvFile: "Παρακαλώ επιλέξτε ένα αρχείο CSV.",
        onlyCsvSupported: "Υποστηρίζονται μόνο αρχεία CSV.",
        maximumFileSize: "Το μέγιστο μέγεθος αρχείου είναι 20 MB.",
        uploadingDataset: "Μεταφόρτωση συνόλου δεδομένων...",
        validatingDataset: "Έλεγχος συνόλου δεδομένων...",
        cleaningDataset: "Καθαρισμός συνόλου δεδομένων...",
        convertingNumericValues: "Μετατροπή αριθμητικών τιμών...",
        preparingDataset: "Προετοιμασία συνόλου δεδομένων...",
        datasetReady: "Το σύνολο δεδομένων είναι έτοιμο.",
        datasetUploadedSuccessfully: "Το σύνολο δεδομένων μεταφορτώθηκε με επιτυχία.",
        rowsUploaded: "Γραμμές που μεταφορτώθηκαν:",
        rowsAfterCleaning: "Γραμμές μετά τον καθαρισμό:",
        removedRows: "Γραμμές που αφαιρέθηκαν:",
        columns: "Στήλες:",
        detectedColumns: "Εντοπισμένες στήλες:",
        datasetValidationFailed: "Η επικύρωση του συνόλου δεδομένων απέτυχε.",
        missingRequiredColumns: "Λείπουν υποχρεωτικές στήλες:",
        importFailed: "Η εισαγωγή απέτυχε.",
        unexpectedServerError: "Παρουσιάστηκε μη αναμενόμενο σφάλμα διακομιστή.",

        importDataset: "Εισαγωγή συνόλου δεδομένων",
        importDescription: "Ανεβάστε το δικό σας σύνολο δεδομένων CPU σε μορφή CSV.",

        importInfo1: "Υποστηρίζονται μόνο αρχεία CSV.",
        importInfo2: "Το σύνολο δεδομένων που ανεβάζετε δεν τροποποιεί την αρχική βάση δεδομένων.",
        importInfo3: "Το σύνολο δεδομένων είναι διαθέσιμο μόνο κατά την τρέχουσα συνεδρία.",
        importInfo4: "Μετά το τέλος της συνεδρίας, το σύνολο δεδομένων διαγράφεται αυτόματα.",

        chooseDataset: "Επιλογή συνόλου δεδομένων",

        currency: "Νόμισμα",
        currencyEuro: "Ευρώ (€)",
        currencyUSD: "Δολάριο ΗΠΑ ($)",
        currencyInfo: "Επιλέξτε το νόμισμα που χρησιμοποιείται στο εισαγόμενο σύνολο δεδομένων.",

        preparing: "Προετοιμασία...",
        done: "Ολοκληρώθηκε",
        restoreOriginalDataset: "Επαναφορά αρχικού συνόλου δεδομένων"
    },
};

const dynamicTranslations = {
    bg: {
        "Изгоден": "Изгоден",
        "Надценен": "Надценен",
        "Бюджетен": "Бюджетен",
        "Среден клас": "Среден клас",
        "Висок клас": "Висок клас",
        "Екстремен": "Екстремен"
    },

    en: {
        "Изгоден": "Good Value",
        "Надценен": "Overpriced",
        "Бюджетен": "Budget",
        "Среден клас": "Mid-range",
        "Висок клас": "High-end",
        "Екстремен": "Extreme"
    },

    de: {
        "Изгоден": "Gutes Preis-Leistungs-Verhältnis",
        "Надценен": "Überteuert",
        "Бюджетен": "Budgetklasse",
        "Среден клас": "Mittelklasse",
        "Висок клас": "Oberklasse",
        "Екстремен": "Extreme Klasse"
    },

    es: {
        "Изгоден": "Buena relación calidad-precio",
        "Надценен": "Sobrevalorado",
        "Бюджетен": "Gama económica",
        "Среден клас": "Gama media",
        "Висок клас": "Gama alta",
        "Екстремен": "Gama extrema"
    },

    fr: {
        "Изгоден": "Bon rapport qualité-prix",
        "Надценен": "Trop cher",
        "Бюджетен": "Économique",
        "Среден клас": "Milieu de gamme",
        "Висок клас": "Haut de gamme",
        "Екстремен": "Extrême"
    },

    it: {
        "Изгоден": "Conveniente",
        "Надценен": "Sovrapprezzato",
        "Бюджетен": "Economico",
        "Среден клас": "Fascia media",
        "Висок клас": "Fascia alta",
        "Екстремен": "Estremo"
    },

    ru: {
        "Изгоден": "Выгодный",
        "Надценен": "Завышенная цена",
        "Бюджетен": "Бюджетный",
        "Среден клас": "Средний класс",
        "Висок клас": "Высокий класс",
        "Екстремен": "Экстремальный"
    },

    pt: {
        "Изгоден": "Boa relação qualidade-preço",
        "Надценен": "Sobrevalorizado",
        "Бюджетен": "Gama económica",
        "Среден клас": "Gama média",
        "Висок клас": "Gama alta",
        "Екстремен": "Gama extrema"
    },

    zh: {
        "Изгоден": "高性价比",
        "Надценен": "价格过高",
        "Бюджетен": "入门级",
        "Среден клас": "中端",
        "Висок клас": "高端",
        "Екстремен": "旗舰级"
    },

    ja: {
        "Изгоден": "お買い得",
        "Надценен": "価格が高すぎる",
        "Бюджетен": "エントリー",
        "Среден клас": "ミドルレンジ",
        "Висок клас": "ハイエンド",
        "Екстремен": "エクストリーム"
    },

    el: {
        "Изгоден": "Καλή σχέση ποιότητας-τιμής",
        "Надценен": "Υπερτιμημένο",
        "Бюджетен": "Οικονομική κατηγορία",
        "Среден клас": "Μεσαία κατηγορία",
        "Висок клас": "Υψηλή κατηγορία",
        "Екстремен": "Ακραία κατηγορία"
    },
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
    },

    de: {
        budgetPlaceholder: "Beispiel 500",
        performancePlaceholder: "Beispiel 15 000",
        coresPlaceholder: "Beispiel 2",
    },

    es: {
        budgetPlaceholder: "Ejemplo 500",
        performancePlaceholder: "Ejemplo 15 000",
        coresPlaceholder: "Ejemplo 2",
    },

    fr: {
        budgetPlaceholder: "Par exemple 500",
        performancePlaceholder: "Par exemple 15 000",
        coresPlaceholder: "Par exemple 2",
    },

    it: {
        budgetPlaceholder: "Ad esempio 500",
        performancePlaceholder: "Ad esempio 15 000",
        coresPlaceholder: "Ad esempio 2",
    },

    ru: {
        budgetPlaceholder: "Например 500",
        performancePlaceholder: "Например 15 000",
        coresPlaceholder: "Например 2",
    },

    pt: {
        budgetPlaceholder: "Por exemplo 500",
        performancePlaceholder: "Por exemplo 15 000",
        coresPlaceholder: "Por exemplo 2",
    },

    zh: {
        budgetPlaceholder: "例如 500",
        performancePlaceholder: "例如 15 000",
        coresPlaceholder: "例如 2",
    },

    ja: {
        budgetPlaceholder: "例：500",
        performancePlaceholder: "例：15 000",
        coresPlaceholder: "例：2",
    },

    el: {
        budgetPlaceholder: "Για παράδειγμα 500",
        performancePlaceholder: "Για παράδειγμα 15 000",
        coresPlaceholder: "Για παράδειγμα 2",
    }
};