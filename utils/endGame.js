import { createNewGameButton } from "./DOMElementCreators.js";
import { inputWrapper } from "./DOMElements.js";

export function endGame(win, handler) {
  alert(win ? `you won!` : `you lost :(`);
  document.body.style.background = win ? `green` : `red`;
  userButton.disabled = true;
  userButton.removeEventListener(`click`, handler);
  inputWrapper.append(createNewGameButton());
}
