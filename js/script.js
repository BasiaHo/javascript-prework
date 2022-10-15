var argButtonName, buttonPaper, buttonRock, buttonScissors;
var playerScore = 0, computerScore = 0;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + "został kliknięty");

  playerMove = argButtonName;
  console.log("wybór ruchu gracza to: " + playerInput);
  playerMove = argButtonName;
  console.log("ruch gracza to: " + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(playerMove, computerMove);
}

var argMoveId,
  argPlayerMove,
  argComputerMove,
  computerMove,
  playerMove,
  randomNumber,
  playerInput;

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
  if (argPlayerMove == "papier" && argComputerMove == "kamień") {
    printMessage("Wygrywasz!");
    incrementScore("player")
  } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
    printMessage("Wygrywasz!");
    incrementScore("player")
  } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
    printMessage("Wygrywasz!");
    incrementScore("player")
  } else if (argPlayerMove == argComputerMove) {
    printMessage("Remis");
  } else {
    printMessage("Przegrywasz :(");
    incrementScore("computer")
  }
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
}

buttonRock = document.getElementById("button-rock");
buttonRock.addEventListener("click", function () {
  buttonClicked("paper");
});
buttonPaper = document.getElementById("button-paper");
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});
buttonScissors = document.getElementById("button-scissors");
buttonScissors.addEventListener("click", function () {
  buttonClicked("nożyce");
});

function incrementScore(scoreType) {
  if (scoreType=="player") {
    playerScore++;
    printScore("playerScore", playerScore)
  } else {
    computerScore++;
    printScore("computerScore", computerScore)
  }
}