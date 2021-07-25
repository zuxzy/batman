var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies,
  Render = Matter.Render,
  Runner = Matter.Runner;

var drops = [];
var bolts = [];
var batman;
var umbrella;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  batman = new Person(400, 400, 400);
  umbrella = new Umbrella(400, 500, 55);
}

function draw() {
  background("black");
  Engine.update(engine);

  for (var i = 0; i < drops.length; i++) {

    drops[i].display();

  }

  if(frameCount%12 === 0){
    drops.push(new Drops(Math.random()*800, 5, 5, 5))
  }

  if(frameCount%120 <= 12 && bolts.length <1){
    bolts.push(new Thunderbolt(400, 20, 500))
  }

  if(frameCount%120 >= 12){
    bolts.length = 0;
  }

  for (var j = 0; j < bolts.length; j++) {

    bolts[j].display();

  }


  batman.display();
}