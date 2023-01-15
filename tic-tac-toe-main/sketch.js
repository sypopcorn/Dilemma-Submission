window.addEventListener('resize',
function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
let circlerad = 2;


let circles = [];
let canvas;
function setup() {
    canvas=createCanvas(windowWidth, windowHeight);
    

    for (var i = 0; i < 750; i++) {
        circleX = random(width);
        circleY = random(height);
        velx = random(-2, 2);
        vely = random(-2, 2);
        circles.push(new cir(circleX, circleY, velx, vely, circlerad));
    }
}
var colArr = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];
function draw() {
    background(0);
    // rectMode(CENTER);
    noStroke();




    for (var i = 0; i < circles.length; i++) {
        circles[i].show();
        circles[i].move();
        circles[i].enlarge();
    }


}

class cir {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.temp = r;
        this.colour = colArr[floor(random(colArr.length))];
    }

    show() {
        fill(this.colour);
        circle(this.x, this.y, (this.r) * 2);
    }


    move() {

        if (this.x + this.r >= width || this.x - this.r < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.r >= height || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }

    enlarge() {

        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d < 50 && this.r < 20) {
            this.r++;
        }
        else if (this.r >= circlerad) {
            this.r--;
        }
    }

}

// function mousePressed() {
//     circleX = mouseX;
//     circleY = mouseY;
//     velx = random(-5, 5);
//     vely = random(-5, 5);
// }
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    setup();
}