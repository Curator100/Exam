// Set the countdown time (15 minutes = 900 seconds)
let countdownTime = 900; 

// Display the countdown every second
let countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;

    // Format minutes and seconds to display as two digits
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;

    // Decrease countdown time
    countdownTime--;

    // When the countdown reaches 0, stop the timer and show the "Times up" message
    if (countdownTime < 0) {
        clearInterval(countdownInterval);
        document.getElementById('text-box').classList.add('hidden');
        document.getElementById('times-up-message').classList.remove('hidden');
    }
}
