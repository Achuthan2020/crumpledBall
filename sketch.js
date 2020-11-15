
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1,line2,line3,ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	line1=new Dustbin(600,650,10,50);
	line2=new Dustbin(600,660,50,10);
	line3=new Dustbin(650,660,10,50);
	ball=new crumpledBall(50,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keydown("up")){
	  ball.velocityX=2;
  }
  drawSprites();
 
}



