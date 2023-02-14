
var trex ,trex_running;
var ground,ground_png
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_png=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running)
  trex.scale = 0.6

  //create a ground sprite
  ground=createSprite(300,180,600,5)
  ground.addImage("moving_ground",ground_png)
}

function draw(){
  background("white")
  ground.velocityX = -5

  //making ground unending
  if(ground.x<0){
   ground.x=ground.width/2;
  }
    if( keyDown("space")){
      trex.velocityY=-10
    }
      trex.velocityY+=0.5; //trex.velocityY+=0.5// add mathematical gravity
      trex.collide(ground)
  drawSprites();
}
