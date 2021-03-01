
let ball;

function setup() {
	createCanvas(500,500);
	ball = new Ball (250, 250, 50);
}
function draw() {
	background(200);
	ball.move();
	ball.show();
	ball.bounce();
}
class Ball {
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
	}
	move() {
		this.x = this.x + random(-4 , 4);
		this.y = this.y + random(-4 , 4);
	}
	show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r);
	}
	bounce() {
		if(this.y > (height - this.r)) {
			this.y = height - this.r;
				console.log("Y Position: " + this.y);
		} else if(this.y < this.r){
			this.y = this.r;
				console.log("Y Position: " + this.y);
				}
		if (this.x < this.r) {
			this.x = this.r;
				console.log("X Position: " + this.x);
		} else if (this.x > (width - this.r))
			this.x = width - this.x;
			console.log("X Position: " + this.x);

		}
	}
