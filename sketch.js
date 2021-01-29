var car,wall,speed,weight,deformation;

function setup() {
  createCanvas(1200,400);
  car = createSprite(100, 200, 50, 50);
  wall = createSprite(1100,200,60,200);
  weight = random(400,1500);
  speed = random(55,90);
  car.velocityX = speed
}
function draw() {
  background(0);  
  if(wall.x-car.x<=car.width/2+wall.width/2){
    car.velocityX=0;
    deformation = 0.5*weight*speed*speed/22500
    if(deformation>=180){
      car.shapeColor=("red")
    }
    else if(deformation>80 && deformation<180){
      car.shapeColor="yellow"
    }
    else if(deformation<=80){
      car.shapeColor="green"
    }
  }
  drawSprites();
}