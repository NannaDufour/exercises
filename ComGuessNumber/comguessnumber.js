"use strict";

const startBtn = document.querySelector("#startBtn");
const toolow = document.querySelector("#tooLowBtn");
const toohigh = document.querySelector("#tooHighBtn");
const correct = document.querySelector("#correctBtn");

let lowestNumber = 1;
let highestNumber = 100;

let computerGuessing;
let numberOfGuess = 0;

const animation = document.querySelector(".graphic");

// Start spillet
function startGame() {
  startBtn.addEventListener("click", computerGess);
  toolow.addEventListener("click", tooLow);
  toohigh.addEventListener("click", tooHigh);
  correct.addEventListener("click", answerComputer);
}

startGame();

// Computerens gæt
function computerGess() {
  computerGuessing =
    Math.floor(Math.random() * (highestNumber - lowestNumber + 1)) +
    lowestNumber;

  document.querySelector(".computerGuess").innerHTML = computerGuessing;

  numberOfGuess = numberOfGuess + 1;
}

// Brugeren siger "For lavt"
function tooLow() {
  lowestNumber = computerGuessing + 1;

  computerGess();
}

// Brugeren siger "For højt"
function tooHigh() {
  highestNumber = computerGuessing - 1;

  computerGess();
}

// Brugeren siger "Du har gættet det!"
function answerComputer() {
  document.querySelector(".computerGuess").innerHTML =
    "Computer: Jeg brugte " + numberOfGuess + " gæt";

  document.querySelector("#winnerContainer").classList.remove("hidden");

  animation.classList.add("celebration");
}
