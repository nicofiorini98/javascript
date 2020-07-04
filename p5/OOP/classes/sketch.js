let bubbles=[];

class Bubble {
    constructor(_x,_y,_r){
        this.x = _x;
        this.y = _y;
        this.r = _r ;
        this.brightness = 10;
    }

    clicked(x,y){
        if(x <this.x +this.r && x> this.x-this.r &&  y <this.y +this.r && y> this.y-this.r){
            this.brightness=255;
        }
    }
   // this.dy=1;
    move() {
        this.y = this.y + random(-2,2);
        this.x = this.x +random(-2,2);
        
    }
    
    show(){
        stroke(255);
        strokeWeight(4 );
        fill(this.brightness,100);
        ellipse(this.x,this.y,this.r*2); 
        textSize(30);
    }
}  

let width =500;
let heigth =400;

function setup() {
    createCanvas(width,heigth);
    

    for(let i = 0; i<10 ; i++){
    let x = random(width);
    let y = random (heigth)
    let r = random(30,50);
    let b = new Bubble(x,y,r);
    bubbles.push(b); 
    }
    
}

function mousePressed(){
    for (let i=0 ; i< bubbles.length ; i++){
        
    bubbles[i].clicked(mouseX,mouseY);
    }
}

function draw() { 
   
    background(0);
   // noFill();
   

   let d = dist(bubbles[0].x,bubbles[0].y,bubbles[1].x,bubbles[1].y);

   if(d< bubbles[0].r + bubbles[1].r)
   {
       background(200,0,100);
   }
    
   for (let bubble of bubbles)
   {
       bubble.move();
       bubble.show();
      // bubble.bounce();
   }
    
	
} 