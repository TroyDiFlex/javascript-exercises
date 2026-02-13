const palindromes = function (word) {
  const cleanString = word.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
  for (let i = 0; i < Math.floor(cleanString.length / 2); i++) {
    if (cleanString[i] !== cleanString.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
