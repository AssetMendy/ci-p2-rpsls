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
  let botHand = Math.floor((Math.random() * 5) + 1)
  if (botHand === 1) {
    botHand = "rock"
  } else if (botHand === 2) {
    botHand = "paper"
  } else if (botHand === 3) {
    botHand = "scissors"
  } else if (botHand === 4) {
    botHand = "lizard"
  } else {
    botHand = "spock"
  }
  console.log(botHand)
}