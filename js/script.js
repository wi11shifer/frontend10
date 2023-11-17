let currentPlayerName;
let remainingAttempts = 3;

currentPlayerName = prompt("Введіть ваше ім'я:") || "Гравець";
function startGame() {
  // Clear previous results
  document.getElementById("result").innerText = "";

  // Get slot container
  const slotContainer = document.getElementById("slotContainer");
  slotContainer.innerHTML = "";

  // Array of possible images (adjust as needed)
  const images = ["images/cherry.jpg", "images/lemon.jpg", "images/orange.jpg", "images/peach.jpg", "images/plum.jpg"];

  // Display three rows of images
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.classList.add("slot-row");

    for (let j = 0; j < 3; j++) {
      const image = document.createElement("img");
      image.classList.add("slot-image");
      image.src = getRandomImage(images);
      row.appendChild(image);
    }

    slotContainer.appendChild(row);
  }

  // Check for a win
  if (checkWin()) {
    document.getElementById("result").innerText = `${currentPlayerName}, ви виграли! 🎉`;
  } else {
    document.getElementById("result").innerText = `${currentPlayerName}, спробуйте ще раз. Залишилося спроб: ${--remainingAttempts}`;
    if (remainingAttempts === 0) {
      document.getElementById("result").innerText = `${currentPlayerName}, гра закінчена. Спробуйте ще раз.`;
      remainingAttempts = 3; // Reset attempts for a new game
    }
  }
}

function getRandomImage(images) {
  // Return a random image from the array
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function checkWin() {
  // Check if all three rows have the same image source
  const rows = document.querySelectorAll(".slot-row");
  const firstImageSrc = rows[0].querySelector(".slot-image").src;

  return Array.from(rows).every(row => row.querySelector(".slot-image").src === firstImageSrc);
}
