//creating a variable so we can keep track of what the user picks
var userInput;

//temporary value/variable for guessing word
var winCondition = "win";

//function that checks the user's guess against the word
function checkGuess(guess){
    //if correct, show letter. Otherwise, do nothing
    if(winCondition.includes(guess)){
        showLetter(guess); //replace function name with actual function
    }
}

//event listener for getting the user input
document.addEventListener("keypress", function(event){
    //logging the user's input every time a key is pressed
    userInput = event.key;

    checkGuess(userInput);
})