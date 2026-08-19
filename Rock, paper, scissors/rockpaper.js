"use strict";

let computerChoice;
let usersChoice;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorClicked);

function rockClicked() {
  usersChoice = "rock";

  makeChoise();
}
function paperClicked() {
  usersChoice = "paper";
  makeChoise();
}
function scissorClicked() {
  usersChoice = "scissors";
  makeChoise();
}

function makeChoise() {
  win.classList.add("hidden"); /* så den nulstiller tekst efter runde */
  lose.classList.add("hidden"); /* så den nulstiller tekst efter runde */
  draw.classList.add("hidden"); /* så den nulstiller tekst efter runde */

  console.log("usersChoice", usersChoice);

  computerChoice = "scissors";

  countdown();
}

function countdown() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", showChoice);
}

function showChoice() {
  player1.classList.remove("shake", "rock", "paper", "scissors");
  player2.classList.remove("shake", "rock", "paper", "scissors");

  // Brugerens valg
  /* video som hjalp mig med at bruge sammenlinging i if else statements https://www.google.com/search?q=how+to+use+comparison+with+two+variables+in+if+else+javascript&rlz=1C5CHFA_enDK905DK905&oq=how+to+use+comparison+with+two+variables+in+if+else+javascript&gs_lcrp=EgZjaHJvbWUyCwgAEEUYChg5GKAB0gEJMTgzMTNqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8#fpstate=ive&vld=cid:3d7d3bce,vid:C3LkAdsQKz0,st:0 */

  if (usersChoice === "rock") {
    player1.classList.add("rock");
  } else if (usersChoice === "paper") {
    player1.classList.add("paper");
  } else {
    player1.classList.add("scissors");
  }

  // Computerens valg
  if (computerChoice === "rock") {
    player2.classList.add("rock");
  } else if (computerChoice === "paper") {
    player2.classList.add("paper");
  } else {
    player2.classList.add("scissors");
  }

  result();
}

const win = document.getElementById("win");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");

function result() {
  if (usersChoice === "scissors" && computerChoice === "paper") {
    win.classList.remove("hidden");
  }

  if (usersChoice === "paper" && computerChoice === "rock") {
    win.classList.remove("hidden");
  }

  if (usersChoice === "rock" && computerChoice === "scissors") {
    win.classList.remove("hidden");
  }

  if (computerChoice === "scissors" && usersChoice === "paper") {
    lose.classList.remove("hidden");
  }

  if (computerChoice === "rock" && usersChoice === "scissors") {
    lose.classList.remove("hidden");
  }

  if (computerChoice === "paper" && usersChoice === "rock") {
    lose.classList.remove("hidden");
  }

  if (usersChoice === computerChoice) {
    draw.classList.remove("hidden");
  }

  console.log("usersChoice", usersChoice);
  console.log("computerChoice", computerChoice);
}
