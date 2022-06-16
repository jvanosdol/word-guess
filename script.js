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