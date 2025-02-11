chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
      apiUrl: "https://api.wakatime.com/v1/users/current/heartbeats",
      apiKey: ""
    });
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "logTime") {
      chrome.storage.sync.get(["apiUrl", "apiKey"], (data) => {
        if (!data.apiKey) {
          console.warn("API Key is not set");
          return;
        }
        fetch(data.apiUrl, {
          method: "POST",
          headers: {
            "Authorization": `Basic ${btoa(data.apiKey)}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            entity: "Tinkercad",
            type: "app",
            time: Date.now() / 1000
          })
        }).then(response => response.json())
          .then(data => console.log("WakaTime response:", data))
          .catch(error => console.error("WakaTime API error:", error));
      });
    }
  });