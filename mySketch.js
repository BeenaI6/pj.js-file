let x = 1;
let g = 3
const SPACE_KEY= 32

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  frameRate(30);
}

function draw() {
  background(255);
	x += g
  ellipse(windowWidth/2, windowHeight/2, x, x)
  fill(0);
}

function keyPressed(){
if(KeyCode = SPACE_KEY) {
   g=-g
	 }
}
					
