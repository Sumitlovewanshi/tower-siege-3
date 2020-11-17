const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world

  //polygon = Bodies.circle(50,200,20)
  //World.add(world,polygon)

  block1 = new Box(220,345,40,30)
  block2 = new Box(300,345,40,30)
  block3 = new Box(380,345,40,30)
  block4 = new Box(340,345,40,30)
  block5 = new Box(260,345,40,30)
  block6 = new Box(300,315,40,30)
  block7 = new Box(340,315,40,30)
  block8 = new Box(260,315,40,30)
  block9 = new Box(300,285,40,30)

  block10 = new Box(650,255,40,30)
  block11 = new Box(610,255,40,30)
  block12 = new Box(690,255,40,30)

  block13 = new Box(620,225,40,30)
  block14 = new Box(680,225,40,30)
  block15 = new Box(650,195,40,30)
  block16 = new Box(650,225,20,30)

  polygon1=  new Polygon(50,200)

  stand1 = new Ground(300,365,200,10)

  stand2 = new Ground(650,275,120,10)

  sling1 = new Slingshot(polygon1.body, {x:100,y:200});

  
}
function draw() {
  background("lightgrey");
  //ellipseMode(RADIUS)
  //ellipse(50,200,20,20)
  stand1.display();
  stand2.display();
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
  polygon1.display();
  sling1.display();
  drawSprites();
}
/*function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}*/
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
  console.log("released is working")
}
function keyPressed(){
  if(keyCode === 32){
      sling1.attach(polygon1.body);
      console.log("space is working")
  }
}