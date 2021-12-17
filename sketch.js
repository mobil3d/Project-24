
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject; 
var world, engine; 

var bin1,bin2,bin3

function setup() {
	createCanvas(displayWidth,displayHeight);
	
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground (displayWidth/2,680,displayWidth,50);
	paperObject = new Paper (50,550,);

	bin1 = new Bin(1600,600,300,50)
	bin2 = new Bin(1450,500,50,300)
	bin3 = new Bin(1750,500,50,300)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  


  ground.display();
  paperObject.display();
  
  bin1.display();
  bin2.display();
  bin3.display();



  drawSprites();
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y: -85});
	}

}

