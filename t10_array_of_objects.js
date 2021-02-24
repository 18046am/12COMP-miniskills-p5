var ball = {
	x:100,
	y:100,
	//width
	w:50,
	//height
	h:50,
	//x velocity
	moveX: 5,
	//y velocity
	moveY: 5,
	radius: function(){
		return (this.w / 2);
	},
var ball = [];


class Ball {
	constructor (){
		this.x = 100;
		this.y = 100;
		this.w = 50;
		this.h = 50;
	}
	bounceX(){
		if (this.x > width - this.radius()) {
			this.x = width - this.radius();
			this.moveX = this.moveX * -1 + random(-0.1, 0.1);
			console.log("X Velocity: " + this.moveX);
		}else if (this.x < this.radius()){
			this.x = this.radius();
			this.moveX = this.moveX * -1;
			console.log("X Velocity: " + this.moveX);
		}
	}
	bounceY(){
		if (ball.y > height - ball.radius()) {
			ball.y = height - ball.radius();
			ball.moveY = ball.moveY * -1 + random(-0.1, 0.1);
			console.log("Y Velocity: " + ball.moveY);
		}else if (ball.y < ball.radius()){
			ball.y = ball.radius();
			ball.moveY = ball.moveY * -1;
			console.log("Y Velocity: " + ball.moveY);
		}
	}

	}


	//ball physics against y wall

}


function setup(){
	createCanvas(300, 200);
	ball.x = random(100, width - 100);
	ball.y = random(100, height - 100)
	for (i = 0; i = 5; i++){
		ball[i] = new Ball();

	}
}


function draw(){
	background(125, 197, 219);
	fill(125, 197, 219);
	ellipse(ball.x, ball.y, ball.w, ball.h);
	ball.x = ball.x + ball.moveX;
	ball.y = ball.y + ball.moveY;
	ball.bounceX()
	ball.bounceY()
}
   