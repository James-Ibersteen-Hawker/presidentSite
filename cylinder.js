//p5 header
let img;
let angle = 19.7;
let angleUp = 0;
let cam;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  draw();
  noLoop();
  cam = createCamera();
}
function draw() {
  background(200);
  noStroke();
  lights();
  translate(0, 250);
  rotateY(angle);
  cylinder(750, 2300);
  texture(img);
}
function preload() {
  img = loadImage("coolidge.jpg");
}
function angler(id) {
  angle =
    19.7 +
    Number(document.getElementById(id).getAttribute("data-h-angle")) / 60;
  redraw();
  angle = 19.7;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}