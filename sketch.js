var fixedRect , movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "Green";
  fixedRect.debug = true;
  movingRect = createSprite( 400, 200, 80, 30);
  movingRect.shapeColor = "Green";
  movingRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX ; 
  movingRect.y = World.mouseY ; 

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
     && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
     && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "Red";
  }
  else {
    fixedRect.shapeColor = "Green";
    movingRect.shapeColor = "Green";
  }
  drawSprites();
}