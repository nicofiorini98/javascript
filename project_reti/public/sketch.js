
//let xoff=0; 
let inc = 0.01;

let start =0;
function setup() {
    createCanvas(400,400);

}
 

function draw() { 
   
    background(50);
    
    let xoff=start; 

    // let y= map(noise(xoff2),0,1,0,height);
    // xoff2+= 0.01
    //xoff=start;

    stroke(255);
    noFill();


    beginShape();
    //prendo tutti i pixel
    for (let x=0; x<width; x++){
      stroke(255);
      //function with noise
      //let y= height/2 + sin(xoff)*height/4
      // y+=map(noise(xoff),0,1,-50,50); //noise on the function
     
      //let n = map(noise(xoff),0,1,-50,50);
      let n=0;
      let s = map(sin(xoff),-1,1,0,height);

      
   // ellipse(50,50, 50,50);
    //line(50,50,50+50*cos(x),50+50*cos(y));

      let y= s+n;
      
      vertex(x,y); 
      
      xoff+= inc;

    } 

    endShape();
 
 
    ellipse(50,50,100,100)
    // let cos=map(cos(x),-1,1,-50,50);
    //let seno = map(sin(x),-1,1,-0,50);

    //line(50,50,50+cos,50+sin);   
    start+=inc;

	
} 