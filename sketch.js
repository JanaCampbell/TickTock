hr=hour();
mn=minute();
sc=seconds();

angleMode(DEGREES);

function map(){
scAngle=map(sc,0,60,0,360)

}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  stroke(255,0,0);
  stokeWeight(7);
  line(0,0,100,0);
  
  drawSprites();
}