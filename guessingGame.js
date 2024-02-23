const readline = require('readline');

// create a readline interface for stdin and stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// number to guess between 1 and 100
const numberToGuess = Math.floor(Math.random() * 100) + 1;
let numberOfAttempts = 0;

// message for the user
console.log("Guess a number between 1 and 100.");

// function to handle the question
function askQuestion() {
    rl.question("What is your guess? ", (guess) => {
        // increment the number of attempts
        numberOfAttempts++;

        // convert the guess to an integer
        const playerGuess = parseInt(guess);

        // check if the guess is correct using conditionals
        if (playerGuess === numberToGuess) {
            console.log("You guessed the number in " + numberOfAttempts + " attempts. Congrats!");
            rl.close();
        } else if (playerGuess < numberToGuess) {
            console.log("Your guess is too low.");
            askQuestion();
        } else if (playerGuess > numberToGuess) {
            console.log("Your guess is too high.");
            askQuestion();
        } else {
            console.log("Your guess is not a number.");
            askQuestion();
        }
    })
}

askQuestion();