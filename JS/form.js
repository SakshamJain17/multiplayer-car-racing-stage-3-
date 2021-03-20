class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Your Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }
    display(){
        this.title.html("Multiplayer Car Racing Game")
        this.title.position(900,0);
        this.input.position(900,400);
        this.button.position(900,500);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(900,200);
        }); 
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}