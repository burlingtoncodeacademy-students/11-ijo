process.stdin.once("data", (input) => {
    console.log(input.toString());
});

function printLine(chris){
    console.log(chris.toString());
}

process.stdin.once("data", printLine);