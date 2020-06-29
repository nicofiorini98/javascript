let time  =0;

let wave = [];
function setup(){

  createCanvas(600, 400);

}

function draw(){

  background(0);

  translate(200,200);

  let radius= 100;

  
  noFill();
  stroke(255)
  ellipse(0,0,radius*2);


  let x= radius * cos(time);
  let y= radius * sin(time);
    
  wave.push(y);

  stroke(255);
  line(0,0,x,y);
  //point(x,y);

  beginShape();
  translate(200,0);
  noFill();
  for (let i = 0 ; i < wave.length; i++){
    vertex(i,wave[i]); 
  }

  endShape();
  time+=0.05;

}