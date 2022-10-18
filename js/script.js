let playerScore = 0,
  computerScore = 0;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + "został kliknięty");

  let playerMove = argButtonName;
  console.log("ruch gracza to: " + playerMove);
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);
  let computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(playerMove, computerMove);
}

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  } else {
    printMessage(
      "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
    );
    return "kamień";
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log(
    "wywołano funkcję displayResults z argumentami: " +
      argPlayerMove +
      ", " +
      argComputerMove
  );
  if (
    (argPlayerMove == "papier" && argComputerMove == "kamień") ||
    (argPlayerMove == "kamień" && argComputerMove == "nożyce") ||
    (argPlayerMove == "nożyce" && argComputerMove == "papier")
  ) {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == argComputerMove) {
    printMessage("Remis");
  } else {
    printMessage("Przegrywasz :(");
    incrementScore("computer");
  }
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
}

const buttonRock = document.getElementById("button-rock");
buttonRock.addEventListener("click", function () {
  buttonClicked("kamień");
});
const buttonPaper = document.getElementById("button-paper");
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});
const buttonScissors = document.getElementById("button-scissors");
buttonScissors.addEventListener("click", function () {
  buttonClicked("nożyce");
});

function incrementScore(scoreType) {
  if (scoreType == "player") {
    playerScore++;
    printScore("playerScore", playerScore);
  } else {
    computerScore++;
    printScore("computerScore", computerScore);
  }
}
