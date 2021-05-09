// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe(("caesar()"), () => {
    it(("should return a single word encrypted"), () => {
        const input = "thinkful";
        const shift = 3;
        const expected = "wklqnixo";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it(("should return a single word, encrypted the other direction"), () => {
        const input = "thinkful";
        const shift = -3;
        const expected = "qefkhcri";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it(("should decrypt a single word"), () => {
        const input = "wklqnixo";
        const shift = 3;
        const expected = "thinkful";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it(("can encrypt multiple words"), () => {
        const input = "This is a secret message!";
        const shift = 8;
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it(("can decrypt multiple words"), () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const shift = 8;
        const expected = "this is a secret message!";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it(("should return false if shift is too large"), () => {
        const input = "thinkful";
        const expected = false;
        const shift = 99;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it(("should return false if shift is too small"), () => {
        const input = "thinkful";
        const expected = false;
        const shift = -26;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });

});