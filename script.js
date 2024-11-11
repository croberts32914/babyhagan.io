// Set the date of your countdown
const tripDate = new Date("June 17, 2025 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
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
    document.getElementById("countdown").innerHTML = "Precious Baby Hagans Arrival Date Has Arrived!";
  }
}, 1000);

window.addEventListener("load", function () {
  const audio = document.getElementById("celebrationAudio");
  audio.muted = false;  // Unmute the audio
  audio.play().catch(error => {
    console.log("Autoplay prevented:", error);
  });
});

// Function to toggle between play and pause
function toggleAudio() {
  const audio = document.getElementById('celebrationAudio');
  const playPauseButton = document.getElementById('playPauseButton');

  // If audio is paused, play it
  if (audio.paused) {
    audio.play();
    playPauseButton.innerText = 'Pause'; // Change button text to "Pause"
  } else {
    audio.pause();
    playPauseButton.innerText = 'Play'; // Change button text to "Play"
  }
}
