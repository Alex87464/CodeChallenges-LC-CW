// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272


function high(x){
    
    const alphabet = {};
    let value = 1;

    for (let i = 97; i <= 122; i++) {
        const letter = String.fromCharCode(i);
        alphabet[letter] = value;
        value++;
      }
    
      let wordValue = 0;
      for (let i = 0; i < x.length; i++) {
        const letter = x[i];
        if (alphabet.hasOwnProperty(letter)) {
          wordValue += alphabet[letter];
        }
      }
      console.log(wordValue);
      return wordValue;
    





    

}

high('abad'); // Output 'abad'-> 8 (1+2+1+4)