class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_imgage);
   
    
    player2 = createSprite(800,500);
   player2.addImage("player2", player_image);
    players=[player1,player2];
    playerGroup.add(player1);
    playerGroup.add(player2);

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
           
                 var x =100;
                 var y=200;
                 var index =0;
         
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
             
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                      fill("red");       
                      textSize(20)
                      text("Player1 : "+Player1,20,30);
                      fill("red");    
                      textSize(20)
                      text(",Player2 : "+Player2,190,30);
                 
                 }
                
                if(virusGroup.isTouching(player1)){

                    textSize(40)
                    text("Game Ended : Player2 Wins ",100,300);
                }

                      
                if(virusGroup.isTouching(player2)){

                    textSize(40)
                    text("Game Ended : Player1 Wins ",100,300);
                }

                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
                if (index === player.index){
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y
                  }
                 if (frameCount % 20 === 0) {
                     virus = createSprite(random(100, 1000), 0, 100, 100);
                     virus.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: virus.addImage("virus1",virus_image);
                         break;
                         case 2: virus.addImage("virus1", virus_image);
                         break;
                         case 3: virus.addImage("virus", virus_image);
                         break;
                         case 4: virus.addImage("virus", virus_image);
                         break;
                    
                     }
                  virusGroup.add(virus)
                
             
                   }
        
                  drawSprites();
    }

    end(){
       console.log("Game Ended");
 
    
    }
}