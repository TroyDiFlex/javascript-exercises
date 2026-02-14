const fibonacci = function (num) {
  if (+num < 0) return "OOPS";
  if (+num === 0) return 0;
  let previous = 0;
  let current = 1;
  let clipboard;
  for (let i = 1; i < +num; i++) {
    clipboard = current;
    current += previous;
    previous = clipboard;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
