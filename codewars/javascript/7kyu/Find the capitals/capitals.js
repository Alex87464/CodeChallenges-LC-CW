// Find the capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b/


function Capitals(word) {
    const result = [];

    for (let i =0; i < word.length; i++) {
        if(word[i] === word[i].toUpperCase()){
            result.push(i);
        }
    }
    console.log(result) // [0, 3, 4, 6]
    return result;
}

Capitals('CodEWaRs'); // Expected output -> [0, 3, 4, 6]