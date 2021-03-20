class Game{
    constructor(){
        
    }

    async start(){
       if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists){
            playerCount = playerCountRef.val();
            player.getCount();
        }
           form = new Form();
           form.display();
           
       }
       car1= createSprite(200,700);
       car2= createSprite(400,700);
       car3= createSprite(600,700);
       car4= createSprite(800,700);
       cars = [car1, car2, car3, car4];

    }
    getState(){
        var gameStateRef= database.ref("gameState");       
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })     
    }
    update(state){
        database.ref("/").update({gameState: state})
    }

    play(){
        form.hide();  
        //text("Game Starts",900,400);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
           //index of the array
            var index = 0;
            //var displayPosition = 130;
            // x and y position of the cars
            var x = 0;
            var y;
            
            for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index+1;
                //position the cars little away from each other in x direction
                x = x + 200;
                // use data from the database to display cars in y position
                 
                if(plr === "player" + player.index){
                    //fill("red");
                }
                /*else{
                    fill("black");
                }*/
                displayPosition = displayPosition+ 20;
                //textSize(15);
                //text(allPlayers[plr].name+ ":"+ allPlayers[plr].distance, 150, displayPosition);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50;
            player.update();
        }
     drawSprites();                 
    }
}