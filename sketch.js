
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob3, bob1, bob2, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 1000);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800,70,500,20);
	bobDiameter = 75;
	bobX = width/2;
	bobY = height/4 +500;

	bob3 = new Bob(bobX,bobY,bobDiameter);
	rope1 = new Rope(bob3.body,roof.body,0,0);

	bob2 = new Bob(bobX - bobDiameter, bobY, bobDiameter);
	rope2 =  new Rope(bob2.body,roof.body,-100, 0);

	bob1 = new Bob(bobX - bobDiameter*2, bobY, bobDiameter);
	rope3 =  new Rope(bob1.body,roof.body,-200, 0);

	bob4 = new Bob(bobX + bobDiameter, bobY, bobDiameter);
	rope4 = new Rope(bob4.body, roof.body, 100,0);

	bob5 = new Bob(bobX + bobDiameter, bobY, bobDiameter);
	rope5 = new Rope(bob5.body, roof.body, 200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob3.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
 
  
  bob1.display();
  rope3.display();


}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:-85});
	}
}

function keyReleased(){
    bob5.fly();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:85,y:-85});
	}
}

function keyReleased(){
    bob4.fly();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:85,y:-85});
	}
}

function keyReleased(){
    bob3.fly();
}

