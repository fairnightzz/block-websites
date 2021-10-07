let display = document.getElementById("unityDisplay")

chrome.storage.sync.get("unity", ({ unity }) => {
  if (unity) {
    display.innerHTML = "This page is using the production build of Unity WebGL."

  }
}); 