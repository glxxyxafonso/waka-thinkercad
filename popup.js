document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["apiUrl", "apiKey"], (data) => {
        document.getElementById("apiUrl").value = data.apiUrl || "";
        document.getElementById("apiKey").value = data.apiKey || "";
    });

    document.getElementById("save").addEventListener("click", () => {
        chrome.storage.sync.set({
            apiUrl: document.getElementById("apiUrl").value,
            apiKey: document.getElementById("apiKey").value
        });
    });
});
