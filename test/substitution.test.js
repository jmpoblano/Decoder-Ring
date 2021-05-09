// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe(("substitution()"), () => {
    it(("encrypt one word"), () => {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("should encrypt multiple words"), () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("Decrypt a single word"), () => {
        const input = "jrufscpw";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "thinkful";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it(("should encrypt using symbols in the alphabet"), () => {
        const input = "message";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected = "y&ii$r&";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
  it(("It should decrypt using symbols in the alphabet"), () => {
    const input = "4y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "message";
    const encode = false;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  })
    it(("should return false if alphabet is too short"), () => {
        const input = "thinkful";
        const alphabet = "short";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("should return false if there are repeats in alpha"), () => {
        const input = "thinkful";
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("return false if alpha was not present"), () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input);
        expect(actual).to.equal(expected);
    });
});