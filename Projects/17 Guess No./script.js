let highscore = Number(localStorage.getItem("highscore")) || 0;

const againBtn = document.getElementById("againBtn");
const numberEl = document.getElementById("number");
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
highscoreEl.textContent = highscore;

againBtn.onclick = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage("Start guessing...");
  numberEl.textContent = "?";
  guessInput.value = "";
  document.body.style.backgroundColor = "#222";
  numberEl.style.width = "100px";
  scoreEl.textContent = score;
};

function displayMessage(msg) {
  messageEl.textContent = msg;
}

checkBtn.onclick = function () {
  let guess = Number(guessInput.value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    numberEl.style.width = "150px";

    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore);
      highscoreEl.textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreEl.textContent = 0;
    }
  }
};
