let timerInterval;
let timeInSeconds = 0;
let isRunning = false;

function pad(num) {
    return ("0" + num).slice(-2);
}

function updateTimerDisplay() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    document.querySelector(".timer-display").textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function watchStart() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        timeInSeconds++;
        updateTimerDisplay();
    }, 1000);
    document.getElementById("start-timer").disabled = true;
    document.getElementById("pause-timer").disabled = false;
}

function watchStop() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timerInterval);
    document.getElementById("start-timer").disabled = false;
    document.getElementById("pause-timer").disabled = true;
}

function watchReset() {
    watchStop();
    timeInSeconds = 0;
    updateTimerDisplay();
}

updateTimerDisplay();