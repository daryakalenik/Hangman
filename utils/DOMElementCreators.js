import { startNewGame } from "./startNewGame.js";

function createSpan() {
  const span = document.createElement(`span`);
  span.textContent = `_`;
  return span;
}

function generateSpans(word, anchor) {
  word.split(``).forEach(() => anchor.append(createSpan()));
}

function createNewGameButton() {
  const btn = document.createElement(`button`);
  btn.addEventListener(`click`, startNewGame);
  btn.id = `startGame`;
  btn.textContent = `Start new game`;
  return btn;
}

export { createSpan, generateSpans, createNewGameButton };
