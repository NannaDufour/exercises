"use strict";

const randomnumber = Math.ceil(Math.random() * 100);

const button = document.querySelector("#Btn");

const inputBox = document.querySelector(".addInput");

const UserInput = document.querySelector("#Input");

guessNumber();

function guessNumber() {
  button.addEventListener("click", () => {
    const Input = Number(UserInput.value);
    const feedback = inputBox.querySelector(".Feedback");
    const picture = inputBox.querySelector("#celebrationimg");
    if (randomnumber === Input) {
      feedback.textContent = "Korrekt!";
      picture.style.display = "inline";
    }
    if (randomnumber < Input) feedback.textContent = "For Højt!";
    else if (randomnumber > Input) feedback.textContent = "For Lavt!";
  });
}
