const convertToCelsius = function (fahr) {
  let cels = (fahr - 32) * (5 / 9);
  return Number(cels.toFixed(1));
};

const convertToFahrenheit = function (cels) {
  let fahr = cels * (9 / 5) + 32;
  return Number(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
