var ball = {
	x:150,
	y:200,
	w:50,
	h:50,
	moveX: 5,
	moveY: 0,
	radius: function(){
		return (this.w / 2);
	}
}

function setup(){
	createCanvas(400,400)
}
function draw(){
	background(125, 197, 219);
	fill(125, 197, 219);
	strokeWeight(3);
	ellipse(ball.x, ball.y, ball.w, ball.h);
	ball.x = ball.x + ball.moveX;
	ball.y = ball.y + ball.moveY;
	if (ball.x > width - ball.radius()) {
		ball.x = width - ball.radius();
		ball.moveX = ball.moveX * -1;
	}else if (ball.x < ball.radius()){
		ball.x = ball.radius();
		ball.moveX = ball.moveX * -1;
		
	}


}
