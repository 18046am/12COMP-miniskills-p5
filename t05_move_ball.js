/********************************************************/
//
/********************************************************/
function setup() {
  createCanvas(400, 400);
}

var circleX = 0;
var circleY = 0;
function draw() {
	noStroke();
  background(83, 101, 181);
	var c = color(222, 94, 33);
		fill(c);
		ellipse(mouseX, mouseY, 10, 10);

	ellipse(circleX, circleY, 50, 50);
	circleX = circleX + 2;
	circleY = circleY + 2;
}