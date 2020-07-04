
let punto = {
    x:100,
    y:100,
    
};
let col={
    r:255,
    g:0,
    b:0
};
function setup() {
	createCanvas(600,400);
}

function draw() {
    col.r=random(0,255);
    col.g=random(0,255);
    col.b=random(0,255);

    punto.x=random(0,600);
    punto.y=random(0,400);
    //col =map(mouseX,0,800,0,100);
   // col = map(mouseX);
	//background(col);  //colore nel canvas

    fill(col.r,col.g,col.b);
    ellipse(punto.x,punto.y,24,24)
	
	
}