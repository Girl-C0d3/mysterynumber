// Generate a random number
// Allow user to guess the number (user input)
// Check guess against generated number
// If incorrect, try again
// If correct - Win game and end

function mysteryNum() {
    let randomNum = Math.floor(Math.random() * 11);
        let guess;
    do {
        let guess = prompt("Guess a number between 1 and 10");
        if (guess < randomNum){
            console.log("Incorrect, your guess is too low. Try again!");
        } else if (guess > randomNum){
            console.log("Incorrect, your guess is too high. Try again!");
        }
    } while (guess != randomNum);
    console.log("Correct! You won!");
}

mysteryNum();

   



