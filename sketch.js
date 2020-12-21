var database;
var gameState =0;
var playerCount = 0;
var allPlayers;


var player, form,game;
var player1,player2;
var players;
var virus_image;
var player_image;
var Player1 = 0;
var Player2 = 0;


function preload(){
  player_image = loadImage("humanjpeg");
  virus_image = loadImage("virus.jpeg");
 
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  playerGroup = new Group();
  virusGroup = new Group();
}

function draw() {
  background(0);


   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}