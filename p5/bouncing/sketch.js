let ball = {
    x: 300,
    y: 200,
    xspeed: 8,
    yspeed: 6
    
};
let width =600;
let heigth =600;


function display(){
    background(0);

    stroke(255); //white line
    strokeWeight(4);
    noFill();

    ellipse(ball.x,ball.y,50,50);
};

function move(){


    ball.x= ball.x + ball.xspeed;
    ball.y= ball.y + ball.yspeed;
	
};

function bounce(){

    if(ball.x > width || ball.x<0){
        ball.xspeed= ball.xspeed* -1;
    }
    if(ball.y > heigth || ball.y<0){
        ball.yspeed= ball.yspeed* -1;
    }
};

function setup() {
	createCanvas(width,heigth);
}

function draw() {

    display();
    bounce();
    move();
    
    
}