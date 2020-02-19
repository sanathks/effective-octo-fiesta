/**
 * Extending random words generators
 */
const { getRandomWordSync, getRandomWord } = require('word-maker');

const getRandomWordWithIndexSync = ({ index, withErrors = false, printFizzBuzz = false }) => {
  try {
    const wordFizzBuzz = fizzBuzzGenerator(index);

    if (!printFizzBuzz || !wordFizzBuzz) {
      return `${index}: ${getRandomWordSync({ withErrors })}`;
    }

    return `${index}: ${wordFizzBuzz}`;
  } catch (e) {
    return `${index}: It shouldn't break anything!`;
  }
};

const getRandomWordWithIndex = async ({ index, withErrors = false, printFizzBuzz = false, slow = false }) => {
  try {
    const wordFizzBuzz = fizzBuzzGenerator(index);

    if (!printFizzBuzz || !wordFizzBuzz) {
      return `${index}: ${await getRandomWord({ withErrors, slow })}`;
    }

    return `${index}: ${wordFizzBuzz}`;
  } catch (e) {
    return `${index}: It shouldn't break anything!`;
  }
};

const fizzBuzzGenerator = index => {
  if (index % 15 === 0){return "FizzBuzz";}
  if (index % 3 === 0){return "Fizz";}
  if (index % 5 === 0){return "Buzz";}

  return false;
};

module.exports = {
  getRandomWordWithIndexSync,
  getRandomWordWithIndex,
};
