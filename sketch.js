
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1200, 1800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(width/2,600,width,20);
	tree = new Tree(1050,580)
	mango1=new Mango(1000,200,30)
	mango2=new Mango(1170,200,30)
	mango3=new Mango(1075,120,30)
	mango4=new Mango(1205,140,30)
	mango5=new Mango(900,180,30)
	mango6=new Mango(1100,50,30)

	stone1= new Stone(140,450,30)
	sling1=new Slingshot(stone1.body,{x:235,y:420})
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display()
  image(boy ,200,340,200,300);
  tree.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  stone1.display()
  sling1.display()

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  drawSprites();
 
}



function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling1.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  sling1.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
