// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


// The CaesarModule function will need to contain an array of the alphabetical order of which each letter will be called.
// SHould set a function to where it can accept an input with all lowercase, spaced, or uppercase letters.
// go over: input, shift, encode. [].
const caesarModule = (function () {
  // you can add any code you want within this function scope

  // array of alphabet to use for matching numbers with letters.
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  function letterToNumber(letter){

    let output = 0;
      for (let i = 0; i < 26; i++){
        if (alphabet[i] == letter){
          output = i;
      }
    }
    return output;
  
  }
  function numberToLetter(number){

    return alphabet[number];
  }

  function caesar(input, shift, encode = true) {
    // your solution code here

    // This if statement checks if the shift matches the code's requirements. That it does not equal zero, mut be between a param. of ->>
    // -25 && 25. Otherwise it can return false before running through the rest of the function.
    if (!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }

    // input covers the parameters of any text being used within the function.
    //  In this function, it states to lowerCase the input, to keep the results concise and clean.
    input = input.toLowerCase();

    // encode, refers to the encryption for the words. if it holds true, it will reverse the shift to the opposite direction.
    if(encode == true){
      shift = shift * -1;
    }

    // This helps to split the returned string into an array of the words.
    let message = input.split(" ");
    let newMessage = [];

    message.forEach((word) => {
      let newWord = [];

      // This section splits each word by character.
      let splitWord = word.split("");
      splitWord.forEach((character) => {

        if (character.toLowerCase() != character.toUpperCase()){

          // This converts character to numbers.
          character = letterToNumber(character);

          character -= shift;

          if (character < 0) {
            character = character += 26;
          }
          if (character > 25) {
            character = character -= 26;
          }

          // this helps to return the number value back into a letter.
          character = numberToLetter(character);

        }
        newWord.push(character);
      });
      newWord = newWord.join("");
      newMessage.push(newWord);
    });

    // This puts back the letters together as words, then the wods back together in sentence structure.
    newMessage = newMessage.join(" ");

    return newMessage;


  }

  return {
   caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
