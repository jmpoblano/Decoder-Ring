// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe(("polybius()"), () => {
    it(("should encrypt a single word"), () => {
        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it(("should encrypt multiple words"), () => {
        const input = "Hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it(("should decrypt one word"), () => {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(("can decrypt a word using (i/j) substitution"), () => {
        const input = "4432423352125413";
        const encode = false;
        const expected = "th(i/j)nkful";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(("Return false if it decrypts an uneven amount"), () => {
        const input = "44324233521254134";
        const expected = false;
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
});