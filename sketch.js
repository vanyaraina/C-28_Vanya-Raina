const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImage;
var ground;
var cannon;


function preload(){
  backgroundImage = loadImage("assets/background.gif")
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150,350,160,310)
  ground = new Ground(600,460,width,10)
  cannon = new Cannon(180,100,110,50, -PI/4)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImage);
  Engine.update(engine);

  tower.display()
  //ground.display()
  cannon.display()
}

