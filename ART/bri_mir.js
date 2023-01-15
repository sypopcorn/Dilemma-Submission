var vid;
var vs = 14;
function setup() {

    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    vid = createCapture(VIDEO);
    vid.size(width / vs, height / vs);
    // vid.hide();
}


function draw() {
    background(0);
    vid.loadPixels();
    loadPixels();

    for (var i = 0; i < vid.width; i++) {
        for (var j = 0; j < vid.height; j++) {

            var r = vid.pixels[(i + j * vid.width) * 4];
            var g = vid.pixels[(i + j * vid.width) * 4 + 1];
            var b = vid.pixels[(i + j * vid.width) * 4 + 2];
            var grey = (r + g + b) / 3;
            // pixels[(i + j * width) * 4] = grey;
            // pixels[(i + j * width) * 4 + 1] = grey;
            // pixels[(i + j * width) * 4 + 2] = grey;
            // pixels[(i + j * width) * 4 + 3] = vid.pixels[(i + j * width) * 4 + 3];
            fill(grey,);
            var w = map(grey, 0, 255, 0, vs);
            fill("white ");
            rectMode(CENTER);
            noStroke();
            rect(i * vs, j * vs, w);
        }
    }
    // updatePixels();
}
function windowResized() {
    location.reload();
}
function resolutionscript(){
    vs = ((vs==9)? 14:9);
    vid.size(width / vs, height / vs);
}