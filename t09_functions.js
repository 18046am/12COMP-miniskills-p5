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
	
	//ball physics against x wall
	bounceX: function (){
		if (ball.x > width - ball.radius()) {
			ball.x = width - ball.radius();
			ball.moveX = ball.moveX * -1 + random(-0.1, 0.1);
			console.log("X Velocity: " + ball.moveX);
		}else if (ball.x < ball.radius()){
			ball.x = ball.radius();
			ball.moveX = ball.moveX * -1;
			console.log("X Velocity: " + ball.moveX);
		}
	},
	//ball physics against y wall
	bounceY: function (){
		if (ball.y > height - ball.radius()) {
			ball.y = height - ball.radius();
			ball.moveY = ball.moveY * -1 + random(-0.1, 0.1);
			console.log("Y Velocity: " + ball.moveY);
		}else if (ball.y < ball.radius()){
			ball.y = ball.radius();
			ball.moveY = ball.moveY * -1;
			console.log("Y Velocity: " + ball.moveY);
		}
	},
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
	ball.bounceX()
	ball.bounceY()
}
   