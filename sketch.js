const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies; 

var canvas,engine,object,world;
var box1;
var ground1;

function setup() {
canvas = createCanvas(800,400);
engine= Engine.create();
world=engine.world;

box1= new Box(500,200,200,200);

ground1= new floor(400,275,800,50);

}

function draw() {
  background(0);
  Engine.update(engine);  
 
  box1.display();
  
  ground1.display();
}