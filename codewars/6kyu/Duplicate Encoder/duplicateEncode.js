// Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

const word = 'Success';

function duplicateEncode(word){

    // Convert the 'word' string to lowercase, then `.split` the word into an array.
    let letters = word.toLowerCase().split(''); // letter -> ['s', 'u', 'c', 'c', 'e', 's', 's']
    // `result` will save the encoded word
    let result = '';

    // `for` to iterate over the array 'letters'
    for (let i = 0; i < letters.length; i++) {
        // First condition, letters.indexOf(letters[i]) returns the index of the first occurrence of letters[i] in the array
        // letters.lastIndexOf(letters[i]) returns the index of the last ocurrence of letters[i] in the array.
        // So if the equality `===`  between both function is true, the string '(' will be added to the `result` variable.
        // Because if the first index of the letter is the same to the last, this means that the letter is in the same place and is
        // not beign repeated.

        // Else: If the previous condition doesn't return true, that means that I have the same letter in different positions
        // therefore it's beign repeteaed. So I add the string `)` to the `result` variable.
        if(letters.indexOf(letters[i]) === letters.lastIndexOf(letters[i])) {
            result += '(';
        } else {
            result += ')';
        }
    }

    // Finally I return the encoded word of my variable result
    return result;
}

console.log(duplicateEncode(word)); // Expected output for 'Success' -> ')())())'