// polyfill for trailing zero
Number.prototype.trailingZero = function() {
    if(this >= 0 && this <= 9) {
        return "0" + this;
    } 
    return this;
};

const timerElement = document.getElementById("timer");
const btnStartStop = document.getElementById("btnStartStop");
const btnReset = document.getElementById("btnReset");

let timerStarted = false;
let interval;

// event listener to start or stop timer
btnStartStop.addEventListener('click', function() {
    if(!timerStarted) {
        // start the timer
        startTimer();
    } else {
        stopTimer();
    }
});


//reset the timer
btnReset.addEventListener('click', function() {
    resetTimer();
});

function startTimer() {
    timerStarted = true;
    const startTime = new Date();
    interval = setInterval(()=>{
        const now = new Date();

        const difference = now.getTime() - startTime.getTime();

        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / (1000));
        
        timerElement.innerText = `${minutes.trailingZero()}:${seconds.trailingZero()}`;

    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    timerStarted = false;
}

function resetTimer() {
    clearInterval(interval);
    timerStarted = false;
    timerElement.innerText = "00:00";
}