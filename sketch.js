const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(740,370,50,50);
    box2 = new Box(940,370,50,50);
    box3= new Box(740,330,50,50);
    box4= new Box(940,330,50,50);
    box5= new Box(820,240,50,50);
    ground = new Ground(600,380,1200,20);

    pig1= new Pig(840,370);
    pig2= new Pig(840,330);

    log1= new Log(840,350,260,PI/2);
    log2= new Log(840,270,260,PI/2);
    log3= new Log(810,240,140,PI/7);
    log4= new Log(880,240,140,-PI/7);
    
    bird= new Bird(300,300);

}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}