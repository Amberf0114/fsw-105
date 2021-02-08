const prize = []

var readline = require('readline-sync');
readline.question("Welcome to The Sidewalk of Mild Discomfort!")     
const name= readline.question("What is your name, walker?")     

const villains = ['a Deaf Child', 'Miley Cyrus', 'a Blind Uber-Driver'];
const reward = ['2 Gold Star Stickers', 'Pat on the Back', "I'm proud of you, Son."]
let playerHP = 5
const options = ['Walk', 'Exit', 'Print']     
let collect = reward[Math.floor(Math.random()*reward.length)]

function randomNumber(number){
    return Math.floor(Math.random() * number)
}

function gamePlay() {
    
    const villain = villains[Math.floor(Math.random()*villains.length)]
    let villainHP = 5
  

    const choose = readline.keyInSelect(options, 'Quick, ' + name + ' decide your move!')

    if (options[choose] == 'Exit') {
        return playerHP = 0
    } else if (options[choose] == 'Print') {
        console.log(name + 'Player HP: \n' + playerHP + '\nRewards Collected: ' + prize)
    } else if (options[choose] === 'Walk') {
        let keyPressed = Math.random();
        if (keyPressed <= .4) {
            console.log("Strolling casually...")
        } else if(keyPressed> .4) {
            console.log( villain + ' is blocking the sidewalk. How rude.')

            while(villainHP > 0 && playerHP > 0) {
                const fightOrFlight = readline.question('What now, ' + name + '? Press "r" to Run Away. \nPress "a" to Argue')
                const attackPower = randomNumber(5)
                const villainPower = randomNumber(5)

                switch (fightOrFlight) {
                    case 'r' :
                        const runAway = Math.random()
                        if(runAway < .5) {
                            console.log('Too slow! ' + villain + ' caused ' + villainPower + ' hurt feelings!')
                            break
                        } else {
                            return console.log("You narrowly avoided a subtle confrontation.");
                            
                        }
                        
                    case 'a' :
                        villainHP -= attackPower
                        readline.question('You caused ' + villain + ' ' + attackPower + ' hurt feelings!')

                        playerHP-= villainPower
                        readline.question(villain + ' caused you ' + villainPower + ' hurt feelings!')

                        if(villainHP <= 0) {
                            console.log("Congratulations! You offended " + villain + " Collect your " + collect + ". You may continue down the sidewalk.")
                            let goodies = Math.random()
                            if (goodies = true) {
                                prize.push(collect);
                            }
                        } else if (playerHP <= 0) {
                            console.log("Ouch! That one stung...Better luck next time, " + name + "!")
                        }

                    }
                }
            }
        }
    

}

while (playerHP > 0) {
    playerLives = function(){
        playing = true
        playerHP = 50
        
    }
    playerLives()
    gamePlay()
}