var ground,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	ground= new Ground(440,200,250,10)
    var startBobPositionX=width/2;
	var startBobPositionY=height/4+500;
	bobDiameter=40;
	bobObject1=new Bob(360,500,40);
	bobObject2=new Bob(400,500,40);
	bobObject3=new Bob(440,500,40);
	bobObject4=new Bob(480,500,40);
	bobObject5=new Bob(520,500,40);

	rope1=new Rope(bobObject1.body,ground.body,-bobDiameter*2, 0)
	rope2=new Rope(bobObject2.body,ground.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,ground.body,0, 0)
	rope4=new Rope(bobObject4.body,ground.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,ground.body,bobDiameter*2, 0)
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display()
  bobObject5.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-70,y:-60});

	}
}


