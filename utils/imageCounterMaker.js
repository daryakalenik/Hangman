export function imageCounterMaker() {
  let counter = 1;
  return function () {
    if (counter === 4) {
      return counter;
    } else {
      return ++counter;
    }
  };
}
