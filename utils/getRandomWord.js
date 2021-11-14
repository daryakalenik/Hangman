const words = [
  `hawaii`,
  `russia`,
  `korea`,
  `africa`,
  `japan`,
  `ukraine`,
  `test`,
];
export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
