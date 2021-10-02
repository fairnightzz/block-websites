// background.js


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ unity: false });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.storage.sync.get("unity", ({ unity }) => {
      if (unity) {
        chrome.tabs.query({active:true, currentWindow: true}, ([tab]) => {
          chrome.action.setIcon({ 
            path: { 128: "unity.png" },
            tabId: tab.id
          })
        })
      }
    })
    sendResponse({farewell: "unity"})
    return true;
  }
);
