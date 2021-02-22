var ball = {
	x:100,
	y:100,
	w:50,
	h:50,
	moveX: 5,
	moveY: 5,
	radius: function(){
		return (this.w / 2);
	}
}

function setup(){
	createCanvas(400,400);
	ball.x = random(100,300);
	ball.y = random(100,300)
}


function draw(){
	background(125, 197, 219);
	fill(125, 197, 219);
	ellipse(ball.x, ball.y, ball.w, ball.h);
	ball.x = ball.x + ball.moveX;
	ball.y = ball.y + ball.moveY;


	if (ball.x > width - ball.radius()) {
		ball.x = width - ball.radius();
		ball.moveX = ball.moveX * -1 + random(-0.1, 0.1);
		console.log("X Velocity: " + ball.moveX);
	}else if (ball.x < ball.radius()){
		ball.x = ball.radius();
		ball.moveX = ball.moveX * -1;
		console.log("X Velocity: " + ball.moveX);
	}

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
   