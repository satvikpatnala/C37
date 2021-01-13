var allPlayers;
var database;
var gameState = 0;
var playerCount,form,player,game;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
   game = new Game()
   game.getState()
   game.start() 
}

function draw(){
   if(playerCount===4){
game.update()

   }
   if(gameState===1){
clear();
game.play();
   }
}
