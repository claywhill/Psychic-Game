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
    console.log(userGuess);

    if (userGuess==computerChoice) {
        wins++; 
    }   else {
        
    }
                
}