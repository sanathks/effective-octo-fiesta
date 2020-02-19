/**
 * Importing the extended methods
 */
const { getRandomWordWithIndexSync, getRandomWordWithIndex } = require('./word-maker-extended');

const wordsGeneratorSync = ({ max = 1, withErrors = false, printFizzBuzz = false } = {}) => {
  const wordsWithIndex = [];
  for (let index = 0; index < max + 1; index++) {
    wordsWithIndex.push(getRandomWordWithIndexSync({ index, withErrors, printFizzBuzz }));
  }

  return wordsWithIndex;
};

const wordsGenerator = async ({ max = 1, withErrors = false, printFizzBuzz = false } = {}) => {
  const wordsWithIndex = [];
  for (let index = 0; index < max + 1; index++) {
    wordsWithIndex.push(getRandomWordWithIndex({ index, withErrors, printFizzBuzz, slow: true }));
  }

  return Promise.all(wordsWithIndex);
};

module.exports = {
  wordsGeneratorSync,
  wordsGenerator,
};
