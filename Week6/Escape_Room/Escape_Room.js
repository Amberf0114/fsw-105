
    const readline = require("readline-sync");
    const name= readline.question("What is your name?")
    readline.question("Welcome to the Escape Room, " + name +". You decide your fate.")
    var playing = true;
    var alive = true;
    var key = false;
    

    while (playing) {
        
        let decision = choices()

        if (decision == 1 && alive) {
            alive = false
           playing = false
           gameOver()
           
        } else if (decision == 2 && key ==false) {
            readline.question("They key has got to be here somewhere...")
            readline.question("There it is!")
            key = true
            
        } else if (decision == 2 && key == true) {
            readline.question("You have the key, try to open the door.")
        
        } else if (decision == 3 && key == true) {
            gameOver()
        } else if (decision == 3 && key == false) {
            console.log("Locked")
        }
        

    }  

    function choices() {
        let playerDecision = readline.keyIn(" You have 3 choices:\n[1] Put hand through hole in door.\n[2] Search for key.\n[3] Open the door.\n",{limit: '$<1-3>', limitMessage: 'Please select 1-3'});
        return playerDecision
    }
    function gameOver() {
        if(alive == false && playing == false) {
        return console.log(name + " has died.")
        } else {
           playing = false
            console.log("You're free! Nice work, " + name +".")
        }
    }
    
    