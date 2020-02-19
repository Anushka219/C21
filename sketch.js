var frec,mrec;
var ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(800,400);
 frec=createSprite(200,200,50,70);
 frec.shapeColor="pink";
frec.debug=true;
 mrec=createSprite(100,100,50,70);
 mrec.shapeColor="blue";
 mrec.debug=true;
 ob1=createSprite(100,200,20,40);
 ob1.shapeColor="pink";
 ob2=createSprite(200,200,20,40);
 ob2.shapeColor="pink";
 ob3=createSprite(300,200,20,40);
 ob3.shapeColor="pink";
 ob4=createSprite(400,200,20,40);
 ob4.shapeColor="pink";
}

function draw() {
  background(255,255,255);
  mrec.x=World.mouseX;
  mrec.y=World.mouseY;
  
  if (isTouching(mrec,ob1))
{
  mrec.shapeColor="red";
  ob1.shapeColor="red";
}
else{
  ob1.shapeColor="pink";
  mrec.shapeColor="blue";  
}
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object2.y-object1.y<object1.height/2+object2.height/2
    && object1.y-object2.y<object1.height/2+object2.height ){
  return true;
    }
    else {
      return false;

    }
}