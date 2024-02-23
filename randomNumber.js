function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = generateRandomNumber(0, 10);

console.log(randomNumber);