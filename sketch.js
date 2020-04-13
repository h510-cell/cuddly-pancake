const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine,world;
var box1;
var backgroundImg,platform;
var bird,slingshot;

var bg="sprites/bg1.png";
var gameState="onSling";

function preload(){
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,305,300,170);

    box1=new Box(400,130,70,70);
    box2=new Box(430,130,70,70);
    box3=new Box(460,130,70,70);
    box4=new Box(430,110,70,70);
    box5=new Box(460,110,70,70);
    box6=new Box(440,90,70,70);
    log1=new Log(480,140,300,PI/2);

    box7=new Box(700,320,70,70);
    box8=new Box(730,320,70,70);
    box9=new Box(760,320,70,70);
    box10=new Box(730,300,70,70);
    box11=new Box(760,300,70,70);
    box12=new Box(740,280,70,70);
    
    ball=new bird(200,50);
    slingshot=new slingshot(bird.body,{x:200,y:50});
}

function draw(){
    if(backgroundImg)
      background(backgroundImg);

      noStroke();
      textSize(35)
      fill("white")

      Engine.update(engine);
      //strokeWeight(4);
      box1.display();
      box2.display();
      ground.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      log1.display();

      box7.display();
      box8.display();
      box9.display();
      box10.display();
      box11.display();
      box12.display();

      ball.display();
      slingshot.display();
}

function mousePressed(){
    //if (gameState!=="launched"){
        Matter.Body.setAngle(this.body,angle);
//}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode===32){
        ball.trajectory=[];
        Matter.Body.setAngle(ball.body,{x:200,y:50});
        slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson=await response.json();

    var datetime=responseJson.datetime;
    var hour=datetime.slice(11,13);

    if(hour>=0660&&hour<=1990){
        bg="sprites/bg1.png"
    }
        else{
            bg="srites/bg2.png";
        }
    }
backgroundImg=loadImage(bg);
console.log(backgroundImg);