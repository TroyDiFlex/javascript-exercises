const sumAll = function (a, b) {
  let count = 0;
  if (
    a < 0 ||
    b < 0 ||
    a % 1 !== 0 ||
    b % 1 !== 0 ||
    typeof a !== "number" ||
    typeof b !== "number"
  )
    return "ERROR";
  if (a < b) {
    for (a; a <= b; a++) count += a;
    return count;
  } else {
    for (b; b <= a; b++) count += b;
    return count;
  }
};

// Do not edit below this line
module.exports = sumAll;
