const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(220,100,50,50);
    box2 = new Box(200,200,100,100);
    ground = new Ground(200,380,600,20);
   
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
   ground.display();
}