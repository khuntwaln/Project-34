const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var superHero, superHeroImage, monster, monsterImage, platform, background, backgroundImage, box1, slingshot,SuperHero;
var engine, world;

function preload() {
  SuperHeroImage = loadImage("FlyingSuperhero.png");
  monsterImage = loadImage("monster.png");
  backgroundImage = loadImage("bckgrnd.png");
}

function setup() {
  createCanvas(600, 500);
  engine = Engine.create();
  world = engine.world;
  platform = new Ground(180,350,350,10);

  box1 = new Box(180,340,20,20);
  box2 = new Box(180,320,20,20);
  box3 = new Box(180,300,20,20);
  box4 = new Box(180,280,20,20);
  box5 = new Box(180,260,20,20);
  box6 = new Box(180,240,20,20);
  box7 = new Box(180,220,20,20);

  box8 = new Box(210,340,20,20);
  box9 = new Box(210,320,20,20);
  box10 = new Box(210,300,20,20);
  box11 = new Box(210,280,20,20);
  box12 = new Box(210,260,20,20);
  box13 = new Box(210,240,20,20);

  box14 = new Box(240,340,20,20);
  box15 = new Box(240,320,20,20);
  box16 = new Box(240,300,20,20);
  box17 = new Box(240,280,20,20);
  box18 = new Box(240,260,20,20);
  box19 = new Box(240,240,20,20);
  box20 = new Box(240,220,20,20);
  box21 = new Box(240,200,20,20);

  box22 = new Box(270,340,20,20);
  box23 = new Box(270,320,20,20);
  box24 = new Box(270,300,20,20);
  box25 = new Box(270,280,20,20);
  box26 = new Box(270,260,20,20);

  box27 = new Ground(350,300,20,10);

  superHero = new Hero(100,200,20,20);

  monster = new Monster(350,290,20,20);

  slingshot = new Fly(superHero.body,{x:100, y:250})
  
}

function draw() {
  background("White");
  Engine.update(engine);
   
  superHero.display();
  monster.display();

  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(superHero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    superHero.trajectory = [];
       slingshot.attach(superHero.body);
  }
}