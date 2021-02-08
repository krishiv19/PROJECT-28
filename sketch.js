
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy,constraint1;

function preload(){
  boy=loadImage("images/boy.png");
  treeObj=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new mango(1100,100,30);
  mango2=new mango(1020,100,30);
  mango3=new mango(1227,214,30);
  mango4=new mango(1140,217,30);
  mango5=new mango(1065,200,30);
  mango6=new mango(996,220,30);
  mango7=new mango(920,200,30);
  
  
	groundObject=new ground(width/2,600,width,20);
  stoneObj=new Stone(245,429);
  constraint1=new Constraint1(stoneObj.body,{x:240,y:425});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);
  image(treeObj,750,40,550,550);

  strokeWeight(6);
  stroke("yellow");
  fill("black");
  textSize(30);
  textFont("Ravie");
  text("Press Space To  Get One More Chance!",100,100);
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  constraint1.display();
  stoneObj.display();
  groundObject.display();

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    constraint1.fly();
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.y+lstone.y){
    Matter.Body.setStatic(lmango.body,false);
  }

}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:245,y:429})
    constraint1.attach(stoneObj.body);
  }
}
