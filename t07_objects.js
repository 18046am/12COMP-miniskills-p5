/********************************************************/
//
/********************************************************/
function setup() {
  createCanvas(400, 400);
}

var circleX = 50;
var circleY =  200;
var speed = 2;
function draw() {
	noStroke();
  background(83, 101, 181);
	var c = color(222, 94, 33);
		fill(c);
		ellipse(mouseX, mouseY, 10, 10);

		c = color(250, 190, 113);

	fill(c);
		rect(200, 150, 50, 50);
		triangle(200, 150, 200, 200, 100, 175);
		triangle(250, 150, 250, 200, 350, 175);
		triangle(200, 150, 250, 150, 225, 50);
		triangle(200, 200, 250, 200, 225, 300);

	ellipse(circleX, circleY, 50, 50);
	circleX = circleX + speed;
	if (circleX > width - 25|| circleX < 25) {
		speed = speed * -1
	}


	}