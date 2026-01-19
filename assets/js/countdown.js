// Wedding Countdown Timer
// Set the wedding date and time: October 17, 2026 at 4:30 PM
const weddingDate = new Date('2026-10-17T16:30:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    document.getElementById('countdown').innerHTML = "<p style='font-size: 1.2rem;'>The big event has arrived!</p>";
  }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);
