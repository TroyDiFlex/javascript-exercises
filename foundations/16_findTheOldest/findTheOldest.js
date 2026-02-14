const findTheOldest = function (arr) {
  const getCurrentYear = () => new Date().getFullYear();
  const getAge = (yearOfBirth, yearOfDeath) =>
    (yearOfDeath ?? getCurrentYear()) - yearOfBirth;

  const theOldestMan = arr.sort((a, b) => {
    const aAge = getAge(a.yearOfBirth, a.yearOfDeath);
    const bAge = getAge(b.yearOfBirth, b.yearOfDeath);
    return bAge - aAge;
  })[0];
  return theOldestMan;
};

// Do not edit below this line
module.exports = findTheOldest;
