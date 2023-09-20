let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when there is no output
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number";
    displayMessage("No number");
  } else if (guess === secret_number) {
    // document.querySelector(".message").textContent = "You win the game";
    displayMessage("🏆 You win the game");
    document.querySelector(".number").textContent = secret_number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secret_number) {
    // document.querySelector(".message").textContent =
    //   guess > secret_number ? "Too High" : "Too Loo";
    if (score > 1) {
      displayMessage(guess > secret_number ? "📈 Too High" : "📉 Too Loo");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game";
      displayMessage("😢 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if (guess > secret_number) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game";
  //   }
  // } else {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Player loses";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  // document.querySelector(".message").textContent = "Start Guessing!!!";
  displayMessage("Start Guessing!!!");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
