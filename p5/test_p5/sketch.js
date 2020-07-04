

let circle = {
	x:0,
	y:0,
	diameter:0,
	r:0,
	g:0,
	b:0,
};

function setup() {
	createCanvas(800,800);
}

function draw() {
	background(100,0,0);  //colore nel canvas

	//stroke()  //color of the line
	//fill()color of the shapes
	fill(circle.r,circle.g,circle.b);
	ellipse(circle.x,circle.y,80,80);
	circle.x++;
	circle.y++;
	circle.r++;
	circle.g++;
	circle.b++;
	
}