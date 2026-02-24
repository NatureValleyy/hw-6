let funColorR;
let funColorG;
let funColorB;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      funColorR = random(0, 256);
      funColorG = random(0, 256);
      funColorB = random(0, 255);
      fill(funColorR, funColorG, funColorB);
      rect((i * windowWidth) / 10, (j * windowHeight) / 10, windowWidth / 10);
    }
  }

  noLoop();

  //let n = 10;
  // let d = width/n
  // let r = d/2

  // for(let j = 0; j<10; j++){
  // 	for(let i = 0; i<n; i++){
  // 		rect(r+(d)*i, 200+d*j, d);
  //         	}
  //}
}

function keyPressed() {
  redraw();
}
