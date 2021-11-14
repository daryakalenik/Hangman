import { getRandomWord } from "./getRandomWord.js";
import {
  createSpan,
  generateSpans,
  createNewGameButton,
} from "./DOMElementCreators.js";
import { imageCounterMaker } from "./imageCounterMaker.js";
import {
  userButton,
  userInput,
  hangman,
  wordWrapper,
  inputWrapper,
} from "./DOMElements.js";
import { endGame } from "./endGame.js";

export function startNewGame() {
  let startGameButton = document.getElementById(`startGame`);
  if (startGameButton) {
    startGameButton.remove();
    startGameButton = null;
  }
  hangman.style.backgroundImage = `url("./images/images/1.png")`;
  const secretWord = getRandomWord();
  wordWrapper.textContent = ``;
  generateSpans(secretWord, wordWrapper);
  const spans = [...document.getElementsByTagName(`span`)];
  const counter = imageCounterMaker();
  console.log(secretWord);
  userButton.addEventListener(`click`, btnClickHandler);
  userButton.disabled = false;
  document.body.style.background = `white`;
  function btnClickHandler() {
    const userLetter = userInput.value.toLowerCase();
    userInput.value = ``;
    userInput.focus();
    const foundLetter = secretWord
      .split(``)
      .map((letter, letterIndex) =>
        userLetter === letter ? letterIndex : undefined
      )
      .filter((letter) => letter != undefined || letter === 0);
    if (foundLetter.length) {
      spans.forEach((span, index) => {
        if (foundLetter.includes(index)) {
          span.textContent = userLetter;
        }
      });
      if (spans.every(({ textContent }) => textContent !== `_`)) {
        endGame(true, btnClickHandler);
      }
    } else {
      const currentCount = counter();
      hangman.style.backgroundImage = `url("./images/images/${currentCount}.png")`;
      if (currentCount === 4) {
        endGame(false, btnClickHandler);
      }
    }
  }
}
