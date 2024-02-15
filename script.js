// Initial values for seconds, minutes, and hours
let [seconds, minutes, hours] = [0, 0, 0];

// Reference to the display element for time
let displayTime = document.getElementById("displayTime");

// Variable to hold the timer interval
let timer = null;

// Function to increment time and update display
function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    // Format hours, minutes, and seconds with leading zeros if necessary
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // Update the display with the formatted time
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

// Function to start the stopwatch
function watchStart() {
    // Clear any existing timer
    if (timer !== null) {
        clearInterval(timer);
    }
    // Start a new timer to call the stopwatch function every second
    timer = setInterval(stopwatch, 1000);
}

// Function to stop the stopwatch
function watchStop() {
    clearInterval(timer);
}

// Function to reset the stopwatch
function watchReset() {
    clearInterval(timer);
    // Reset seconds, minutes, and hours to zero
    [seconds, minutes, hours] = [0, 0, 0];
    // Reset the display to show "00:00:00"
    displayTime.innerHTML = "00:00:00";
}
