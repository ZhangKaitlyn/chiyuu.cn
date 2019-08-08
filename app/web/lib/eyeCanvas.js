const PersonImg = require('../asset/images/no_eye.svg')
var canvas,
  ctx,
  winWidth,
  width,
  height,
  mx,
  my,
  mouseIdle,
  mouseIdleTick,
  mouseIdleMax,
  eyes,
  PI,
  TAU

const Eye = function(opt) {
  this.x = opt.x
  this.y = opt.y
  this.radius = opt.radius
  this.pupilX = this.x
  this.pupilY = this.y
  this.pupilRadius = this.radius / 3
  this.angle = 0
  this.magnitude = 0
  this.magnitudeMax = this.radius - this.pupilRadius
}

Eye.prototype.step = function() {
  var dx = mx - (winWidth / 2 + this.x),
    dy = my - this.y,
    dist = Math.sqrt(dx * dx + dy * dy)
  this.angle = Math.atan2(dy, dx)
  if (mouseIdle) {
    this.magnitude = 0
  } else {
    this.magnitude = Math.min(Math.abs(dist), this.magnitudeMax)
  }
  this.pupilX +=
    (this.x + Math.cos(this.angle) * this.magnitude - this.pupilX) * 0.05
  this.pupilY +=
    (this.y + Math.sin(this.angle) * this.magnitude - this.pupilY) * 0.05
}

Eye.prototype.draw = function() {
  ctx.beginPath()
  ctx.arc(this.pupilX, this.pupilY, this.pupilRadius, 0, TAU)
  ctx.fillStyle = '#000'
  ctx.fill()
}

const init = function() {
  addEventListener('mousemove', mousemove)
  addEventListener('resize', reset)
  canvas = document.querySelector('canvas')
  ctx = canvas.getContext('2d')
  mouseIdleMax = 100
  PI = Math.PI
  TAU = PI * 2
  eyes = []
  reset()
  loop()
}

const reset = function() {
  winWidth = window.innerWidth
  width = 70
  height = 100
  canvas.width = width
  canvas.height = height
  mx = width / 2
  my = 50
  mouseIdle = true
  eyes.length = 0
  eyes.push(
    new Eye({
      x: width * 0.36,
      y: height * 0.42,
      radius: 6.3
    })
  )
  eyes.push(
    new Eye({
      x: width * 0.65,
      y: height * 0.42,
      radius: 6.3
    })
  )
}

const mousemove = function(e) {
  mx = e.pageX
  my = e.pageY
  mouseIdleTick = mouseIdleMax
}

const step = function() {
  var i = eyes.length
  while (i--) {
    eyes[i].step()
  }

  if (mouseIdleTick > 0) {
    mouseIdleTick--
    mouseIdle = false
  } else {
    mouseIdle = true
  }
}

const draw = function() {
  ctx.clearRect(0, 0, width, height)
  let img = new Image()
  img.src = PersonImg
  ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height)

  var i = eyes.length
  while (i--) {
    eyes[i].draw()
  }
}

const loop = function() {
  requestAnimationFrame(loop)
  step()
  draw()
}

module.exports = {
  init
}
