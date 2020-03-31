function animateLaptop(node) {
  var watcher = scrollMonitor.create(node, -200)
  var screen = $(node).find(".website")

  watcher.enterViewport(function() {
    node.addClass("show")
  })
}

// -----------------------------------------------------------------------------
// Images

function loadImages(nodes) {
  nodes.each(function(i, node) {
    var watcher = scrollMonitor.create(node, {
      top: -100
    })

    watcher.enterViewport(function() {
      nodes
        .queue(function() {
          $(node).addClass("show")
          $(this).dequeue()
        })
        .delay(150)
    })
  })
}

function loadImage(node) {
  var watcher = scrollMonitor.create(node)

  watcher.enterViewport(function() {})
}
