// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const bet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function codeIt(letter, alphabet) {

    let output = "";
    for (let i = 0; i < bet.length; i++) {
      if (bet[i] == letter) {
        output = alphabet[i];
      }
    }
    return output;
  }

  function decode(letter, alphabet) {

    let output = "";
    for (let i = 0; i <alphabet.length; i++) {
      if (alphabet[i] == letter) {
        output = bet[i];
      }
    }
    return output;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) {
      return false;
    }
    alphabet = alphabet.slice("");

    if (alphabet.length < 26) {
      return false;
    }

    for (let i = 0; i < alphabet.length; i++) {
      for (let i = 0; j < alphabet.length; j++) {

        if (alphabet[i] === alphabet[j] && i != j) {
          return false;
        }
      }
    }

    let output = [];

    input = input.toLowerCase();

    let sentence = input.split(" ");
    console.log(sentence);
    sentence.forEach((word) => {

      let letters = word.split("");
      let outputword = [];
      letters.forEach((character) => {

        if (encode === true) {
          outputword.push(decode(character, alphabet));
        }
      });

      outputword = outputword.join("");
      output.push(outputword);
    });

    output = output.join(" ");
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
