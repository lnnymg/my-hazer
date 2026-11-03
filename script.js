"use strict";

const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");
const letterWindow = document.querySelector("#letterWindow");
const yesButton = document.querySelector("#yesButton");
const thinkButton = document.querySelector("#thinkButton");
const reply = document.querySelector("#reply");

function openLetter() {
  letterWindow.classList.add("is-open");
  letterWindow.setAttribute("aria-hidden", "false");
  closeButton.focus();
}

function closeLetter() {
  letterWindow.classList.remove("is-open");
  letterWindow.setAttribute("aria-hidden", "true");
  openButton.focus();
}

openButton.addEventListener("click", openLetter);
closeButton.addEventListener("click", closeLetter);

// Clicking the dark area outside the letter closes it.
letterWindow.addEventListener("click", (event) => {
  if (event.target === letterWindow) closeLetter();
});

// Escape also closes the letter when it is open.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && letterWindow.classList.contains("is-open")) {
    closeLetter();
  }
});

thinkButton.addEventListener("click", () => {
  reply.textContent = "That's okay. Take all the time you need. ❤️";
});

yesButton.addEventListener("click", () => {
  reply.textContent = "YAY!! You just made me the happiest person. I love you! 💗";
  launchHearts();
  yesButton.disabled = true;
  yesButton.textContent = "It's a YES! 💖";
});

function launchHearts() {
  const symbols = ["💗", "💕", "💖", "💘", "❤️"];

  for (let i = 0; i < 28; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${18 + Math.random() * 22}px`;
    heart.style.animationDelay = `${Math.random() * 1.2}s`;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}
