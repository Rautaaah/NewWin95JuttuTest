// ===================================================================== //
// ========================= backrooms script ========================== //
// ===================================================================== //
// audio and video interaction handler 
document.addEventListener('click', () => {
    // play the background ambience audio (if the audio element exists)
    const audio = document.getElementById("ambience");
    if (audio) {
        audio.volume = 0.1;
        audio.play().catch(error => {
            console.log("Audio play blocked or failed:", error);
        });
    }
    // Unmute the video if it exists
    const video = document.getElementById("my-video");
    if (video && video.muted) {
        video.muted = false;
        video.volume = 1.0;
    }
}, { once: true });
// ===================================================================== //
// for random links 
const randomLinkElement = document.getElementById('random-link');
if (randomLinkElement) {
  randomLinkElement.addEventListener('click', function(event) {
    event.preventDefault(); 
    const randomIndex = Math.floor(Math.random() * urls.length);
    window.location.href = urls[randomIndex];
  });
}

// ===================================================================== //
// for random phrases (Wrapped to wait until the HTML body is fully loaded)
function loadRandomText() {
  const targetParagraph = document.getElementById("text-element");
  if (targetParagraph && typeof phrases !== 'undefined' && phrases.length > 0) {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    targetParagraph.textContent = phrases[randomIndex];
  }
}

// Run it once the DOM is ready
document.addEventListener('DOMContentLoaded', loadRandomText);

// ===================================================================== //
// no clips
if (typeof links !== 'undefined' && Array.isArray(links) && links.length > 0) {
  let secondsLeft = (typeof noclipDelay !== 'undefined') ? noclipDelay : 30;
  const timer = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(timer);
      const randomLink = links[Math.floor(Math.random() * links.length)];
      window.location.href = randomLink;
    }
  }, 1000);
}