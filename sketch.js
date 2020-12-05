//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(1000,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (600,800,1200,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    }

  Engine.run(engine);
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  ground.display();

  for (var p = 0; p < plinkos.length; p++) 
  {
    plinkos[p].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(350, 650), 15,15));
  }

  for (var j = 0; j < particles.length; j++) 
  {
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

  
  
 
  
}