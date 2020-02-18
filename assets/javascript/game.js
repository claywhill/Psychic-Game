// I need to have the computer choose a letter
// I need the user to guess a letter
// I need to display how many guesses user has remaining
// I need to display what letters the user has guessed
// If user guesses computer choice then increase wins
// If user does not guess computer choice then increase losses

// letters computer can choose from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// variable for storing number of wins
var wins = 0;

// variable for storing number of losses
var losses = 0;

// variable for displaying letters already guessed 
var lettersUsed = [];

// variable for displaying number of guesses user has left
var guessesRemaining = 10;

// radomizes the letters computer can choose
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

// function for capturing the key pressed by user
document.onkeydown = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// conditional statement that checks if the user guess is equal to the computer choice
// if they are equal then the computer will alert the user of the correct letter, wins will increase by 1, the letters guessed will reset, guesses remaining will be reset to 10, and the computer will choose a new letter 
    if (userGuess==computerChoice) {
        alert("The correct letter was " + computerChoice.toUpperCase() + "!");
        wins++;
        lettersUsed = [];
        guessesRemaining = 10;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];

// if the user guess does not equal computer choice then guesses remaining will decrease by 1 and the user guess will be displayed in the used letters
    } else {
        guessesRemaining--;
        lettersUsed.push(userGuess);

// if the number of guesses remaining drops to 0 then the computer will alert the user of the correct letter, losses will increase by 1, letters gussed will reset, gusses remaining will be reset to 10, and teh computer will choose a new letter
    }   if (guessesRemaining < 1) {
        alert("Sorry, the correct letter was " + computerChoice.toUpperCase() + ". Better luck next time.");
        losses++;
        lettersUsed = [];
        guessesRemaining = 10;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];

    }
// variable that stores the html that will be updated to the screen once the conditional statement runs
    var html = "<h1>Psychic Game</h1>" + "<p>Guess what letter I'm thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesRemaining + "</p>" + "<p>Your Guesses So Far: " + lettersUsed + "</p>";

    document.querySelector("#game").innerHTML = html;
}

