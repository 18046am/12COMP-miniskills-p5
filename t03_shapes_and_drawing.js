/********************************************************/
//
/********************************************************/
function setup() {
  createCanvas(400, 400);
}

function draw() {
	noStroke();
  background(83, 101, 181);
	var c = color(250, 153, 107);

	fill(c);
		rect(200, 150, 50, 50);
		triangle(200, 150, 200, 200, 100, 175);
		triangle(250, 150, 250, 200, 350, 175);
		triangle(200, 150, 250, 150, 225, 50);
		triangle(200, 200, 250, 200, 225, 300);

	}