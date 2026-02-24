/*
 * Title: Homework 5
 * Author: Myles Amoah
 * Date:  Feb 19 2026
 * Simple Description: A grid of ellipses that change color within greyscale.
 * Instructions: Click to change to ellipse color.
 */
let color;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let n = 6;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      color = random(0, 255);
      fill(color);
      noStroke();
      ellipse(50 + 100 * i, 100 * j, 100);
    }
    noLoop();
  }
}

function mousePressed(){
  redraw();
}