const countingTimerTextElement = document.querySelector("#counting-timer-text");
const minutesElement = countingTimerTextElement.querySelector(".minutes");
const secondsElement = countingTimerTextElement.querySelector(".seconds");
const millisecondsElement = countingTimerTextElement.querySelector(".milliseconds");
const btnReset = document.querySelector("#btn-reset");
const btnStartStop = document.querySelector("#btn-start-stop");

// event listeners for click event of btn
btnReset.addEventListener('click', resetCountdown);
btnStartStop.addEventListener('click', toggleCountdown);

let interval;
let isCountingStarted = false;

let milliseconds = 00;
let seconds = 00;
let minutes = 00;

let minutesStr = checkNumber(minutes);
let secondsStr = checkNumber(seconds);
let millisecondsStr = checkNumber(milliseconds);

minutesElement.innerText = minutesStr;
secondsElement.innerText = secondsStr;
millisecondsElement.innerText = millisecondsStr;


// function to reset countdown
function resetCountdown() {
    clearInterval(interval);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    minutesElement.innerText = "00";
    secondsElement.innerText = "00";
    millisecondsElement.innerText = "00";

    isCountingStarted = false;
}

// function to start stop countdown
function toggleCountdown() {

    // start the counter
    if(!isCountingStarted) {
        isCountingStarted = true;
        interval = setInterval(()=>{
            milliseconds += 1;
            if(milliseconds === 100) {
                milliseconds = 0;
                seconds += 1;
            }

            if(seconds === 60) {
                seconds = 0;
                minutes += 1;
            }

            let minutesStr = checkNumber(minutes);
            let secondsStr = checkNumber(seconds);
            let millisecondsStr = checkNumber(milliseconds);

            minutesElement.innerText = minutesStr;
            secondsElement.innerText = secondsStr;
            millisecondsElement.innerText = millisecondsStr;

        }, 10);
    } else {
        clearInterval(interval);
        isCountingStarted = false;
    }
}

function checkNumber(n) {
    if(n <= 9) {
        return "0" + n;
    } 
    return n;
}