
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, paperObject,ground;
function preload()
{
	
}


	
	function setup() {
		createCanvas(1250, 650);
		rectMode(CENTER);
	
	
		engine = Engine.create();
		world = engine.world;
		fill("lightPurple");
		paperObject=new Paper(200,450,70);
		
		ground=Bodies.rectangle(625,590,width,20,{isStatic:true});
		ground.shapColor=color(0,0,0);
		World.add(world,ground);

		dustbin1=new Dustbin(1100,200,200,500);
		
	
	
		Engine.run(engine);
	  
	}
	
	
	function draw() {
	  rectMode(CENTER);
	  background(100);
	 
	  rect(width/2,650,width,20);
	  dustbin1.display();
	  paperObject.display();
	
	  
	  
	 
	}
	
	function keyPressed() {
		if (keyCode === UP_ARROW) {
	
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-130});
	
	  
		}
	}



