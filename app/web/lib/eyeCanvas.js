// import PersonImg from '../asset/images/person.png'
const PersonImg = require('../asset/images/person.png')
var canvas,
    ctx,
    width,
    height,
    mx,
    my,
    mouseIdle,
    mouseIdleTick,
    mouseIdleMax,
    eyes,
    PI,
    TAU;

function Eye(opt) {
    this.x = opt.x;
    this.y = opt.y;
    this.radius = opt.radius;
    this.pupilX = this.x;
    this.pupilY = this.y;
    this.pupilRadius = this.radius / 3;
    this.angle = 0;
    this.magnitude = 0;
    this.magnitudeMax = this.radius - this.pupilRadius;
}

Eye.prototype.step = function () {
    var dx = mx - this.x,
        dy = my - this.y,
        dist = Math.sqrt(dx * dx + dy * dy);
    this.angle = Math.atan2(dy, dx);
    if (mouseIdle) {
        this.magnitude = 0;
    } else {
        this.magnitude = Math.min(Math.abs(dist), this.magnitudeMax);
    }
    this.pupilX += ((this.x + Math.cos(this.angle) * this.magnitude) - this.pupilX) * 0.1;
    this.pupilY += ((this.y + Math.sin(this.angle) * this.magnitude) - this.pupilY) * 0.1;
};

Eye.prototype.draw = function () {
    ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, TAU);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.pupilX, this.pupilY, this.pupilRadius, 0, TAU);
    ctx.fillStyle = '#000';
    ctx.fill();
};

const init = function () {
    addEventListener('mousemove', mousemove);
    addEventListener('resize', reset);
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    mouseIdleMax = 100;
    PI = Math.PI;
    TAU = PI * 2;
    eyes = [];
    reset();
    loop();
}

function reset() {
    width = innerWidth;
    width = 70
    console.log('innerWidth', innerWidth)
    height = innerHeight;
    height = 100
    canvas.width = width;
    canvas.height = height;
    mx = width / 2;
    my = height / 2;
    mouseIdle = true;
    eyes.length = 0;
    eyes.push(new Eye({
        x: width * 0.36,
        y: height * 0.42,
        radius: 6.5
    }));
    eyes.push(new Eye({
        x: width * 0.65,
        y: height * 0.42,
        radius: 6.5
    }));
}

function mousemove(e) {
    mx = e.pageX;
    my = e.pageY;
    mouseIdleTick = mouseIdleMax;
}

function step() {
    var i = eyes.length;
    while (i--) {
        eyes[i].step();
    }

    if (mouseIdleTick > 0) {
        mouseIdleTick--;
        mouseIdle = false;
    } else {
        mouseIdle = true;
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    let img = document.getElementById('jsPersonImgId')
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height)

    var i = eyes.length;
    while (i--) {
        eyes[i].draw();
    }
    // ctx.beginPath();
    // ctx.arc(width / 2, height * 0.65, 100, 0, PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();
}

function loop() {
    requestAnimationFrame(loop);
    step();
    draw();
}

module.exports = {
    init
}