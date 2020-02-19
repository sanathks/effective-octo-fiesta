const { getRandomWordWithIndexSync, getRandomWordWithIndex } = require('./word-maker-extended');

jest.mock('word-maker', () => ({
    getRandomWordSync: () => "test",
    getRandomWord: async () =>  Promise.resolve("test"),
}));


describe('getRandomWordWithIndexSync test cases', () => {

    it('will generate random word', () => {
        const result = getRandomWordWithIndexSync({ index: 1});
        expect(result).toBe('1: test')
    });

    it('will return Buzz with multiples of five', () => {
        const result = getRandomWordWithIndexSync({ index: 5, printFizzBuzz: true});
        expect(result).toBe('5: Buzz')
    });

    it('will return Fizz with multiples of three', () => {
        const result = getRandomWordWithIndexSync({ index: 6, printFizzBuzz: true});
        expect(result).toBe('6: Fizz')
    });

    it('will return FizzBuzz of both multiples of three and five,', () => {
        const result = getRandomWordWithIndexSync({ index: 15, printFizzBuzz: true});
        expect(result).toBe('15: FizzBuzz')
    });
});

describe('getRandomWordWithIndex test cases', () => {

    it('will generate random word', async () => {
        const result = await getRandomWordWithIndex({ index: 1});
        expect(result).toBe('1: test')
    });

    it('will return Buzz with multiples of five', async () => {
        const result = await getRandomWordWithIndex({ index: 5, printFizzBuzz: true});
        expect(result).toBe('5: Buzz')
    });

    it('will return Fizz with multiples of three', async () => {
        const result = await getRandomWordWithIndex({ index: 6, printFizzBuzz: true});
        expect(result).toBe('6: Fizz')
    });

    it('will return FizzBuzz of both multiples of three and five,', async () => {
        const result = await getRandomWordWithIndex({ index: 15, printFizzBuzz: true});
        expect(result).toBe('15: FizzBuzz')
    });
});

