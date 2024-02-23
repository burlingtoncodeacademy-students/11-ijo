const readline = require('readline');

// create a readline interface for stdin and stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask the user for their name
rl.question("What is your name?", (input) => {
    // log their name to the console
    console.log(`Hello, ${input}!`);

    // close the readline interface
    rl.close();
});