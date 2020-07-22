var gameState=0,playerCount;
var database;
var position;
var form,game,player;

function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    database=firebase.database();
game=new Game();
game.getState();
game.start();
    
}


function draw(){
    background("white");
  
    drawSprites();
}

