document.addEventListener("mousemove", logActivity);
document.addEventListener("keydown", logActivity);
document.addEventListener("click", logActivity);

timer = null;
function logActivity() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    chrome.runtime.sendMessage({ type: "logTime" });
  }, 10000); // Logs activity every 10 seconds of continuous use
}
