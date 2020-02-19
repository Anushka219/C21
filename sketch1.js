var frec,mrec;
function setup() {
  createCanvas(1200,800);
 frec=createSprite(400,100,50,70);
 frec.shapeColor="pink";
frec.debug=true;
 mrec=createSprite(400,800,50,70);
 mrec.shapeColor="blue";
 mrec.debug=true;
 mrec.velocityY=-5;
 frec.velocityY=5;
}
function draw(){
background("black");
       

   
  bounceOff(); 
    drawSprites();
}

function bounceOff(object1,object2){
    if (object2.x-object1.x<object1.width/2+object2.width/2
        && object1.x-object2.x<object1.width/2+object2.width/2){
            object1.velocityX=mrec.velocityX*(-1);
            object2.velocityX=object2.velocityX*(-1); 
}
if (  object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height ){ 
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1); 
    }
}