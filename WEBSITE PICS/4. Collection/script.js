
    // Toggle dropdowns on click
    document.querySelectorAll('.dropbtn').forEach(button => {
      button.addEventListener('click', e => {
        e.stopPropagation();
        const dropdown = button.parentElement;
        dropdown.classList.toggle('active');
  
        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
          if (d !== dropdown) d.classList.remove('active');
        });
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    });

    const buttons = document.querySelectorAll('.play-btn');

buttons.forEach(btn => {
btn.addEventListener('click', () => {
const audioId = btn.dataset.audio;
const cardId = btn.dataset.card;
const gifFile = btn.dataset.gif; // 👈 each card’s unique GIF
const audio = document.getElementById(audioId);
const card = document.getElementById(cardId);

if (audio.paused) {
  // Pause all others first
  document.querySelectorAll('audio').forEach(a => a.pause());
  document.querySelectorAll('.play-btn').forEach(b => b.src = 'icon only (white).png');
  document.querySelectorAll('.card').forEach(c => {
    c.style.backgroundImage = "url('paused.jpg')";
  });

  // Play the selected audio
  audio.play();
  btn.src = 'icon only (white).png';
  card.style.backgroundImage = `url('${gifFile}')`;
} else {
  // Pause current audio
  audio.pause();
  btn.src = 'icon only (black).png';
  card.style.backgroundImage = "url('paused.jpg')";
}

// When the song ends, reset visuals
audio.onended = () => {
  btn.src = 'icon only (white).png';
  card.style.backgroundImage = "url('paused.jpg')";
};
});
});
