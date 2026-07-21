document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("datasetFile");
    const importButton = document.getElementById("btnImportDataset");
    const uploadStatus = document.getElementById("uploadStatus");
    const MAX_FILE_SIZE = 20 * 1024 * 1024; //20MB



    const importModal = document.getElementById("importModal");
    importModal.addEventListener("show.bs.modal", () => {

        fileInput.value = "";
        hideStatus();

        document.getElementById("btnImportDataset").style.display = "inline-block";
        document.getElementById("doneContainer").style.display = "none";
    });

    function hideStatus() {
         uploadStatus.style.display = "none";
         uploadStatus.textContent = "";
    }

    function showStatus(message, type = "danger") {
        uploadStatus.style.display = "block";
        uploadStatus.className = `alert alert-${type} mt-3`;
        uploadStatus.innerHTML = message;
    }

    importButton.addEventListener("click", async () => {
        const currentLanguage = localStorage.getItem("language") || "en";
        const t = translations[currentLanguage];

        hideStatus();
        const file = fileInput.files[0];

        if (!file) {
            showStatus(t.selectCsvFile);
            return;
        }

        if (!file.name.toLowerCase().endsWith(".csv")) {
            showStatus(t.onlyCsvSupported);
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            showStatus(t.maximumFileSize);
            return;
        }

        showProgress(10, t.uploadingDataset);

        const formData = new FormData();
        formData.append("dataset", file);
        formData.append("currency", document.getElementById("datasetCurrency").value);

        try {
            const response = await fetch("/import_dataset", {method: "POST", body: formData});
            const data = await response.json();

            if (data.success) {
                document.getElementById("btnImportDataset").style.display = "none";

                const columns = data.column_names.map(col => `• ${col}`).join("\n");

                showStatus(`
                    <b>${t.datasetUploadedSuccessfully}</b>
                    <ul class="list-unstyled mt-0 mb-0">
                        <li><b>${t.rowsUploaded}</b> ${data.rows_before_cleaning}</li>
                        <li><b>${t.rowsAfterCleaning}</b> ${data.rows_after_cleaning}</li>
                        <li><b>${t.removedRows}</b> ${data.removed_rows}</li>
                        <li><b>${t.columns}</b> ${data.columns}</li>
                    </ul>
                
                    <b>${t.detectedColumns}</b>
                    ${columns}
                `, "success");

                showProgress(25, t.validatingDataset);

                await new Promise(resolve => setTimeout(resolve, 250));

                showProgress(45, t.cleaningDataset);

                await new Promise(resolve => setTimeout(resolve, 250));

                showProgress(65, t.convertingNumericValues);

                await new Promise(resolve => setTimeout(resolve, 250));

                showProgress(80, t.preparingDataset);

                await new Promise(resolve => setTimeout(resolve, 250));

                showProgress(100, t.datasetReady);
                document.getElementById("doneContainer").style.display = "block";
            } else {
                  document.getElementById("btnImportDataset").style.display = "inline-block";
                  document.getElementById("doneContainer").style.display = "none";

                  showStatus(data.message || t.importFailed);

                  if (data.missing_columns) {
                    const missing = data.missing_columns.map(column => `• ${column}`).join("<br>");
                    showStatus(`<b>${t.datasetValidationFailed}</b><br>
                        ${t.missingRequiredColumns}<br>
                        ${missing}`);
                  }
            }
        } catch (error) {
            console.error(error);
            showStatus(t.unexpectedServerError);
        }
    });

    document.getElementById("btnDone").addEventListener("click", () => {
        document.activeElement.blur();
        sessionStorage.setItem("toast", "datasetImported");
        window.location.href = "/";
    });

    function showProgress(percent, text) {
        document.getElementById("processingContainer").style.display = "block";
        const bar = document.getElementById("processingProgress");

        bar.style.width = percent + "%";
        bar.textContent = percent + "%";

        document.getElementById("processingText").textContent = text;
    }

    function hideProgress() {
        document.getElementById("processingContainer").style.display = "none";
    }
});


const restoreButton = document.getElementById("btnRestoreDataset");

if (restoreButton) {
    restoreButton.addEventListener("click", async () => {
        const response = await fetch("/restore_dataset", {method: "POST"});
        const data = await response.json();

        if (data.success) {
            sessionStorage.setItem("toast", "defaultDatasetRestored");
            window.location.href = "/";
        }
    });
}