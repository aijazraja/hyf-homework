console.log('Canvas dawing in JS');
const c = document.getElementById("myCanvas");
const ctx0 = c.getContext("2d");
ctx0.beginPath();
ctx0.arc(95, 50, 40, 0, 2 * Math.PI);
ctx0.stroke();
ctx0.fillStyle = "blue";
ctx0.fill();

//  class creation time
const ctx = c.getContext("2d");
ctx.canvas.width = window.innerWidth; // canvas size as width of screen
ctx.canvas.height = window.innerHeight;// canvas size as height of screen
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.stAngle = startAngle;
        this.endAngle = endAngle;
        this.color = fillColor;

    }

    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.stAngle, this.endAngle);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();

    }

}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();
const c2 = new Circle(150, 150, 80, 0, 2 * Math.PI, "#000000");
c2.draw();
const c3 = new Circle(350, 350, 120, 0, 2 * Math.PI, "#000000");
c3.draw();


// Now lets make art!=> Random circles creation in Canvas

setInterval(() => {
    const x = Math.floor(Math.random() * 2000) + 1;
    const y = Math.floor(Math.random() * 2000) + 1;
    const r = Math.floor(Math.random() * 30);
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const c1 = new Circle(x, y, r, 0, 2 * Math.PI, randomColor);
    c1.draw();
}, 100);

// drawing circles on mouse move
let mouseX;
let mouseY;
document.getElementById("myCanvas").addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

});

setInterval(() => {
    const x = mouseX;
    const y = mouseY;
    const r = Math.floor(Math.random() * 30);
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const c1 = new Circle(x, y, r, 0, 2 * Math.PI, randomColor);
    c1.draw();
}, 100);




