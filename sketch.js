const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;


function preload(){
  polygon_img=loadImage("polygon.png");
}



function setup() {
  createCanvas(1600,700);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  ground = new Ground(800,690,2000,20);
  stand1 = new Stand(410,500,400,15);
  
  block1=new Block(300,471,30,40);
	block2=new Block(333,471,30,40);
	block3=new Block(366,471,30,40);
	block4=new Block(399,471,30,40);
	block5=new Block(432,471,30,40);
	block6=new Block(465,471,30,40);
	block7=new Block(498,471,30,40);
	block8=new Block(333,430,30,40);
	block9=new Block(366,430,30,40);
	block10=new Block(399,430,30,40);
	block11=new Block(432,430,30,40);
	block12=new Block(465,430,30,40);
	block13=new Block(366,400,30,40);
	block14=new Block(399,400,30,40);
	block15=new Block(432,400,30,40);
	block16=new Block(399,370,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}



function draw() {
  background("black"); 
 
 

 ground.display();
  stand1.display();
 
  strokeWeight(2);
  stroke(15);
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();
  block15.display();
 
  block16.display();
 
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,80,80);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}