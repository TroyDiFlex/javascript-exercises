const removeFromArray = function (arr, ...args) {
  let currentIndex = 0;
  for (let j = arr.length; j > 0; j--) {
    for (let i = args.length - 1; i >= 0; i--) {
      currentIndex = arr.indexOf(args[i]);
      if (currentIndex < 0) continue;
      arr.splice(currentIndex, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
