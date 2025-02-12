const extAPI = typeof browser !== "undefined" ? browser : chrome;

document.addEventListener("DOMContentLoaded", () => {
    extAPI.storage.sync.get(["apiUrl", "apiKey"]).then((data) => {
        document.getElementById("apiUrl").value = data.apiUrl || "";
        document.getElementById("apiKey").value = data.apiKey || "";
    });

    document.getElementById("save").addEventListener("click", () => {
        extAPI.storage.sync.set({
            apiUrl: document.getElementById("apiUrl").value,
            apiKey: document.getElementById("apiKey").value
        });
    });
});
