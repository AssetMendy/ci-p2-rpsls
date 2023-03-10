document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("input");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "reset") {
              resetGame();
          } else {
              let userHand = this.getAttribute("data-type")
                  startGame(userHand);
          }
      })
  }
})

function startGame(userHand) {
  let botHand = Math.floor((Math.random() * 5))
  if (botHand === 0) {
    botHand = "rock"
  } else if (botHand === 1) {
    botHand = "paper"
  } else if (botHand === 2) {
    botHand = "scissors"
  } else if (botHand === 3) {
    botHand = "lizard"
  } else {
    botHand = "spock"
  }
  return compareHands(userHand, botHand);
}

function compareHands(userHand, botHand) {
  let result;

  // Code compares user's choice (userHand) to computers choice (botHand) and returns Win, Loss or Draw
  if (userHand === "rock") {
    if (botHand === "scissors" || botHand === "lizard") {
      result = "win";
    } else if (botHand === "spock" || botHand === "paper") {
      result = "loss";
    } else if (botHand === userHand) {
      result = "draw"
    }
  } else if (userHand === "paper") {
    if (botHand === "rock" || botHand === "spock"){
      result = "win";
    } else if (botHand === "scissors" || botHand === "lizard") {
      result = "loss";
    } else if (botHand === userHand) {
      result = "draw"
    }
  } else if (userHand === "scissors") {
    if (botHand === "paper" || botHand === "lizard"){
      result = "win";
    }  else if (botHand === "rock" || botHand === "spock") {
      result = "loss";
    } else if (botHand === userHand) {
      result = "draw"
    }
  } else if (userHand === "lizard") {
    if (botHand === "paper" || botHand === "spock"){
      result = "win";
    } else if (botHand === "rock" || botHand === "scissors") {
      result = "loss";
    } else if (botHand === userHand) {
      result = "draw"
    }
  } else if (userHand === "spock") {
    if (botHand === "rock" || botHand == "scissors") {
      result = "win";
    } else if (botHand === "paper" || botHand === "lizard") {
      result = "loss";
    } else if (botHand === userHand) {
      result = "draw"
    }
  }

  return checkWinner(result)
}

function checkWinner(result) {
  if (result === "win") {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++userScore;
  } else if (result === "loss") {
    let botScore = parseInt(document.getElementById("bot-score").innerText);
    document.getElementById("bot-score").innerText = ++botScore;
  } else {
    alert `It's a draw! You and Computer both throwed ${userHand}!`
  }
}
