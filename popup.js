const extAPI = typeof browser !== "undefined" ? browser : chrome; // Chrome and Firefox compatibility

document.addEventListener("DOMContentLoaded", () => {
    extAPI.storage.sync.get(["apiUrl", "apiKey"], (data) => {
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