// Set the date of your trip
const tripDate = new Date("June 17, 2025 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = tripDate - now;

  // Calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Trip time!";
  }
}, 1000);
