let stopwatch;
let startTime;
let isRunning = false;
let elapsedTime = 0;

function updateStopwatch() {
    const currentTime = new Date().getTime();
    elapsedTime = Math.floor((currentTime - startTime)); // Update every 10 milliseconds

    const hundredths = elapsedTime % 100;
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    //const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    //const formattedHour = `${pad(hours)}`;
    const formattedMinute = `${pad(minutes)}`;
    const formattedSecond = `${pad(seconds)}`;
    const formattedHundredths = `${padHundredths(hundredths)}`;
    document.getElementById('minutes').innerText = formattedMinute;
    document.getElementById('seconds').innerText = formattedSecond;
    document.getElementById('hundredths').innerText = formattedHundredths;
}
function startStopwatch() {
    if (!isRunning) {
        startTime = new Date().getTime() - elapsedTime; // Adjust start time based on elapsed time
        stopwatch = setInterval(updateStopwatch); // Update every 10 milliseconds
        isRunning = true;
      }
}

function stopStopwatch() {
    clearInterval(stopwatch);
    isRunning = false;
}
function pad(number) {
    return (number < 10) ? `0${number}` : number;
}
function padHundredths(hundredths) {
    return (hundredths < 10) ? `0${hundredths}` : hundredths;
}