/*
 * Title: Project 1
 * Author: Myles Amoah
 * Date:  Feb 10 2026
 * Simple Description: Random shape generator in which you can pause the screen to land on a new shape. EPILEPSY WARNING.
 * Instructions: Drag the mouse around to control the size of the shape. Click to pause on your shape
 */

let vertColor;
let HorizColor;

function setup() {
  createCanvas(600, 600);
  frameRate(32);
}

function draw() {
  background(125, 75, 240);
  fill(255);
  text("star", width / 2, height / 2);
  let mappedSizeX = map(mouseX, 0, width, 50, 600, true);

  let mappedSizeY = map(mouseY, 0, height, 50, 600, true);

  colorMode(RGB);
  vertColorR = map(mouseY, 0, height, 0, 190);
  vertColorG = map(mouseX, 0, height, 255, 0);
  HorizColorR = map(mouseX, 0, width, 0, 190);
  HorizColorG = map(mouseY, 0, width, 0, 255);

  //blendMode(HARD_LIGHT);

  vertRectangle(mappedSizeX, mappedSizeY);
  HorizRectangle(mappedSizeX, mappedSizeY);

  let v = random(0, 600);
  let b = random(0, 600);
  let n = random(0, 600);
  let m = random(0, 600);

  vertRectangle(v, b);
  HorizRectangle(n, m);
}

function vertRectangle(x, y) {
  noStroke();
  fill(vertColorR, vertColorG, 240);
  rectMode(CENTER);
  rect(width / 2, height / 2, x, y);
}

function HorizRectangle(x, y) {
  noStroke();
  fill(HorizColorR, HorizColorG, 240, 128);
  rectMode(CENTER);
  rect(width / 2, height / 2, y, x);
}


function mousePressed() {
  noLoop();
}
