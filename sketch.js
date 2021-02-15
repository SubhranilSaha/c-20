var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(750, 200, 50, 80);
  movingRect= createSprite(75, 200, 80, 30);
movingRect.velocityX=2

}

function draw() {
  background(255,255,255);  

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.width/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.width/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
movingRect.velocityX=-2
}

else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
