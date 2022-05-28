var ball
var bottomGround
var rightGround
var leftGround

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	destiny:1.1
}
	ball=Bodies.circle(260,100,40,ball_options)
World.add(world,ball)
bottomGround=new Ground(width/2,690,width,20)
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40)
bottomGround.display()

  drawSprites();
 
}



