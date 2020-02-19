const fs = require('fs');
const { performance } = require('perf_hooks');

const { wordsGeneratorSync, wordsGenerator }  = require('./word-generator');


console.log('It works!');

// YOUR CODE HERE

const run = async () => {
    const fileStream = fs.createWriteStream('words.txt');

    fileStream.write("Synchronous random word generator with index \n");
    const generatedWordsSync = wordsGeneratorSync({max:100, withErrors: true, printFizzBuzz: true});
    fileStream.write(generatedWordsSync.join("\n"));

    fileStream.write("\nAsynchronous random word generator with index \n");
    // calling getRandomWord({ slow: true }) to emulate the slowness.
    const t0 = performance.now();
    const generatedWords = await wordsGenerator({max:100, withErrors: true, printFizzBuzz: true});
    const t1 = performance.now();

    fileStream.write(generatedWords.join("\n"));


    console.log("Asynchronous random word generator took " + (t1 - t0) + " milliseconds.");


    fileStream.end();
};

run().then(() => console.log("Done!"));
