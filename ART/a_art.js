var vid;
var vs = 14;
const bright = 'OMÑ@#W$9876543210?!abc;:+=-,._       ';


function setup() {

    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    vid = createCapture(VIDEO);
    vid.size(width / vs, height / vs);
    vid.hide();



}


function draw() {
    background(0);
    vid.loadPixels();
    // loadPixels();
    for (var i = 0; i < vid.width; i++) {
        for (var j = 0; j < vid.height; j++) {
            var ind = (i + j * (vid.width)) * 4;
            var r = vid.pixels[ind];
            var g = vid.pixels[ind + 1];
            var b = vid.pixels[ind + 2];
            var grey = (r + g + b) / 3;


            var index = bright.charAt(floor(map(grey, 0, 255, bright.length, 0)));

            noStroke();
            fill(255);

            text(index, i * vs, j * vs);
        }
    }


    // updatePixels();
}

function windowResized() {
    location.reload();
    resizeCanvas(windowWidth, windowHeight);

}

function changescript(){
    (document.getElementById("changesrc")).innerHTML= `<script id ='changesrc' src="bri_mir.js"></script>`;
}
function resolutionscript(){
    vs = ((vs==10)? 14:10);
    vid.size(width / vs, height / vs);
    // resizeCanvas(windowWidth, windowHeight);
}