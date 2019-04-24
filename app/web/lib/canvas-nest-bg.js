const bgCreator = function() {
  /*******************************************************************************
    Necessary Variables
*******************************************************************************/
  var stage = window.document.querySelector('#stage')
  var cb = stage.getBoundingClientRect(),
    ctx = stage.getContext('2d'),
    ratio = window.devicePixelRatio || 1,
    mouse = { x: 0, y: 0 },
    dots = [],
    wide = 60,
    high = wide / 2.2,
    size = 15,
    padding = 0

  /*******************************************************************************
    Events
*******************************************************************************/

  window.onmousemove = function(e) {
    mouse.x = e.pageX * ratio
    mouse.y = e.pageY * ratio
  }

  window.onresize = function() {
    ctx.canvas.width = window.innerWidth * ratio
    ctx.canvas.height = window.innerHeight * ratio
    cb = stage.getBoundingClientRect()
  }

  window.onresize()

  /*******************************************************************************
    Setup
*******************************************************************************/

  var create = function() {
    var d = 20
    for (var i = -1; ++i < wide; ) {
      var x =
        Math.floor(((cb.width - padding * 2) / (wide - 1)) * i + padding) *
        ratio

      for (var j = -1; ++j < high; ) {
        var y =
          Math.floor(((cb.height - padding * 2) / (high - 1)) * j + padding) *
          ratio

        dots.push({
          x: x,
          y: y,
          ox: x,
          oy: y
        })
      }
    }
  }

  create()

  /*******************************************************************************
    Rendering and frame calculations
*******************************************************************************/

  var render = function() {
    // clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // choose the dot color
    ctx.fillStyle = 'rgba(255,255,255,.5)'

    // for each line
    for (var i = 0; i < dots.length; i++) {
      var s = dots[i]

      var v = getV(s)

      ctx.beginPath()
      ctx.moveTo(s.x, s.y)
      // ctx.lineTo(s.x + v.x, s.y + v.y)
      ctx.strokeStyle = '#333'
      ctx.lineWidth = 1 * ratio
      ctx.stroke()
      ctx.closePath()
    }

    // for each dot
    for (var i = 0; i < dots.length; i++) {
      var s = dots[i]

      var v = getV(s)

      ctx.circle(s.x + v.x, s.y + v.y, s.size * ratio, true)
      ctx.fill()
    }
  }

  var getV = function(dot) {
    // find the distance from the line to the mouse
    var d = getDistance(dot, mouse)

    // reverse the distance, so that the number is bigger when the mouse is closer.
    dot.size = (200 - d) / 40
    dot.size = dot.size < 1 ? 1 : dot.size

    dot.angle = getAngle(dot, mouse)

    return {
      x: (d > 20 ? 20 : d) * Math.cos((dot.angle * Math.PI) / 180),
      y: (d > 20 ? 20 : d) * Math.sin((dot.angle * Math.PI) / 180)
    }
  }

  var getAngle = function(obj1, obj2) {
    var dX = obj2.x - obj1.x
    var dY = obj2.y - obj1.y
    var angleDeg = (Math.atan2(dY, dX) / Math.PI) * 180
    return angleDeg
  }

  var getDistance = function(obj1, obj2) {
    var dx = obj1.x - obj2.x
    var dy = obj1.y - obj2.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  /*******************************************************************************
    Drawing circles
*******************************************************************************/

  CanvasRenderingContext2D.prototype.circle = function(x, y, r) {
    this.beginPath()
    this.arc(x, y, r, 0, 2 * Math.PI, false)
    this.closePath()
  }

  /*******************************************************************************
    Animation Setup
*******************************************************************************/

  window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  })()
  ;(function animloop() {
    render()

    requestAnimationFrame(animloop)
  })()
}
module.exports = bgCreator
