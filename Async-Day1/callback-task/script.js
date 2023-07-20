// Countdown
var count = 10;

// Countdown logic
function countdown() {
  document.getElementById('countdown').innerText = count;
  count--;

  if (count >= 0) {
    setTimeout(countdown, 1000);
  } else {
    displayMessage();
  }
}

// Display message
function displayMessage() {
  document.getElementById('message').innerText = "Happy Independence Day!";
}

// Start the countdown
setTimeout(countdown, 1000);
