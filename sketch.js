var ball;
var Red;
var Blue;
var Green;
var Yellow;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    CreateCanvas(1000,800);
    

    //create 4 different surfaces
    var ball = createSprite(random(20,750),random(20,350),20,20);
    ball.velocityX = 3;
    ball.velocityY = 3;
    ball.shapeColor = "white";
    

    var Red = createSprite(125,700,245,20);
    Red.shapeColor = "red";

    var Blue = createSprite(375,700,245,20);
    Blue.shapeColor = "blue";

    var Green = createSprite(625,700,245,20);
    Green.shapeColor = "green";

    var Yellow = createSprite(875,700,245,20);
    Yellow.shapeColor = "yellow";

    

}

function draw() {
    background("black");
    
    createEdgeSprites();
    
    if(ball.bounceOff(Red)){
        ball.shapeColor = "red";
    }

    if(ball.bounceOff(Blue)){
        ball.shapeColor = "blue";
    }

    if(ball.bounceOff(Green)){
        ball.shapeColor = "green";
    }

    if(ball.bounceOff(Yellow)){
        ball.shapeColor = "yellow";
    }

    drawSprites();

    ball.bounceOff(edges);
    ball.bounceOff(red);
    ball.bounceOff(blue);
    ball.bounceOff(green);
    ball.bounceOff(yellow);
}
