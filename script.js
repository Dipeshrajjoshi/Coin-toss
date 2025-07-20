const coin = document.getElementById('coin');
const flipBtn = document.getElementById('flip-btn');
const resultDisplay = document.getElementById('result');
const coinSound = document.getElementById('coin-sound');

let isFlipping = false;
let rotation = 0; // keep track of cumulative rotation

function flipCoin() {
  if (isFlipping) return; // prevent spam clicks
  isFlipping = true;

  resultDisplay.textContent = '';

  // Decide outcome before animation
  const isHeads = Math.random() < 0.5;
  const outcome = isHeads ? 'Heads' : 'Tails';

  // Increase rotation angle
  rotation += 1800;

  // Add 180 if tails so the back face shows
  const finalRotation = rotation + (isHeads ? 0 : 180);

  // Apply rotation to coin
  coin.style.transform = `rotateY(${finalRotation}deg)`;

  // Play sound
  if (coinSound) {
    coinSound.currentTime = 0;
    coinSound.play().catch(() => {});
  }

  setTimeout(() => {
    resultDisplay.textContent = outcome;
    isFlipping = false;
  }, 2000); // Matches CSS transition duration
}

flipBtn.addEventListener('click', flipCoin);
