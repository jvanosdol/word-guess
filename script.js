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
});


var TimerInterval = 0;
var oneSecond = 1000;
var countdown = 10;
var timeEl = document.querySelector( '#Timer' );

function startTimer() {

    TimerInterval = setInterval( function() {

        countdown--;
        timeEl.textContent = countdown;

        if ( countdown ) {
            clearInterval( TimerInterval );
            timeEl.textContent = 'Times Up!';
        }

     }, oneSecond );
}
