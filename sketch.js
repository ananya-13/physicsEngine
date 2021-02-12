const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create(); //engine.world
  world=engine.world;
  var options={
    isStatic:true,
    }
  ground=Bodies.rectangle(200,390,400,10,options);
  World.add(world,ground);
  
var options={
  restitution:1,
  friction:0.5
}
  ball=Bodies.circle(200,200,25,options);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(0);
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,25);
}