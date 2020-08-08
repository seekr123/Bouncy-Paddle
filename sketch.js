var ball,img,paddle;
function preload() {

  ballimg=loadImage('ball.png');
  paddleimg=loadImage('paddle.png');

}
function setup() {
  createCanvas(400, 400);
   
  paddle=createSprite(380,200,20,20);
  paddle.addImage('paddle',paddleimg);
  ball=createSprite(50,200,20,20);
  ball.addImage('ball',ballimg);
  
  ball.velocityX=9
  edges=createEdgeSprites();
  

}

function draw() {
  background(205,153,0);

  ball.bounceOff(paddle,randomVelocity);
  if(ball.bounceOff(paddle)){
     randomVelcity();
     }
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.collide(edges);


  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
  
  
  if(keyDown(UP_ARROW))
  {
  paddle.velocityY=paddle.velocityY-2; 
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=paddle.velocityY+2;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(-6,6);
  
    /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

