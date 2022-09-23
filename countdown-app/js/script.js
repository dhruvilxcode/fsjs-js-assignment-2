const minutesElemenet = document.querySelector("#inputMinutes");
const secondsElemenet = document.querySelector("#inputSeconds");

// store interval time
let interval;
let isCountdownStarted = false;

// event listeners
const btnReset = document.getElementById('btn-reset');
const btnStartStop = document.getElementById('btn-start-stop')

btnReset.addEventListener('click', resetCountdown)
btnStartStop.addEventListener('click', toggleCountdown)

// reset countdown
function resetCountdown() {
    isCountdownStarted = false;
    clearInterval(interval);
    minutesElemenet.value = 0;
    secondsElemenet.value = 0;
}

// start or stop countdown
function toggleCountdown() {
    if(!isCountdownStarted) {
        // start countdown

        let mm = parseInt(minutesElemenet.value);
        let ss = parseInt(secondsElemenet.value);

        if(mm === 0 && ss === 0) {
            alert("Set time to start countdown!");
            return;
        }

        let countdownTime = new Date();
        countdownTime.setMinutes(countdownTime.getMinutes() + mm);
        countdownTime.setSeconds(countdownTime.getSeconds() + ss);

        isCountdownStarted = true;
        interval = setInterval(()=>{
            let now = new Date();
            let remainingTime = countdownTime.getTime() - now.getTime();
            
            minutesElemenet.value = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            secondsElemenet.value = Math.floor((remainingTime % (1000 * 60)) / (1000));

            // countdown completed
            if(remainingTime < 0) {
                resetCountdown();
                alert("Countdown completed");
            }

        }, 500);

    } else {
        // stop countdown
        isCountdownStarted = false;
        clearInterval(interval);
    }
}