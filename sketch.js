var database;
var form, player, game, playerCount;  
var gameState = 0;
var allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
  database = firebase.database();
  createCanvas(1900,800);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("yellow")
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}

