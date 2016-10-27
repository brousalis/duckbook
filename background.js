var toggle = true
chrome.browserAction.onClicked.addListener(function (tab) {
  toggle = !toggle
  console.log(toggle)
  if (toggle) {
    chrome.browserAction.setIcon({path: 'on.png', tabId: tab.id})
    chrome.storage.sync.set({duckbook: 'on'})
  } else {
    chrome.browserAction.setIcon({path: 'off.png', tabId: tab.id})
    chrome.storage.sync.set({duckbook: 'off'})
  }
  chrome.tabs.executeScript(tab.id, {code: 'window.location.reload();'})
})
