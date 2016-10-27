;(function () {
  chrome.storage.sync.get(['duckbook'], function (item) {
    var observer = new MutationObserver(function (mutations) {
      if (item['duckbook'] === 'off') { return }

      mutations.forEach(function (mutation) {
        var newNodes = mutation.addedNodes
        if (newNodes !== null) {
          var nodes = document.querySelectorAll('.userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4')
          for (var ii = 0, nn = nodes.length; ii < nn; ii++) {
            var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : ''
            console.log(text)
            if (text && text.indexOf('shared') >= 0 &&
              (text.indexOf('video') >= 0 || text.indexOf('photo') || text.indexOf('post')) &&
              nodes[ii].style.display != 'none') {
              nodes[ii].style.display = 'none'
            }
          }
        }
      })
    })

    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    })
  })
})()
