/*

### Number guessing game!
  * Create a file called `number-guessing-game.js`.
  * In this file, re-write your number guessing game 
    (from the basic javascript workshop) for the command line!
    
Generate a random number between 1 and 100. Using the browser functions 
prompt and alert, ask the user to guess the number. You should give them 4 
tries to guess the number. If they guess wrong, tell them if it's higher or 
lower. If they guess right, congratulate them. Otherwise, give them a message 
saying what the correct number was, as well as their list of guesses.

  * Instead of using `prompt` and `alert`, you will have to 
    use capabilities from NodeJS and any external module. 
    **HINT**: there is an npm library called `prompt` that can 
    help you with that :)
  

*/

var prompt = require('prompt');
var numToGuess = Math.floor(Math.random() * 100);

function letsPlay() {
    var tries = 3;
    function game() {
        prompt.get("number", function(err, ans) {
            // get the user location in lat/long
            var guess = Number(ans.number);
            if (err) {
                console.log('there was an error');
            }
            else {
                if (tries === 0){
                   console.log("Out of tries! Game over!");
                }
                if (guess > numToGuess && tries > 0) {
                    console.log("Wrong! Too high! try again");
                    tries--;
                    game();

                }
                if (guess < numToGuess && tries > 0) {
                    console.log("Wrong! Too low! try again");
                    tries--;
                    game();
                }
                if (guess === numToGuess) {
                    console.log("Congrats! You got it!");
                }
                
            }
        });
    }

    if (tries > 0) {
        game();
    }
}

letsPlay();