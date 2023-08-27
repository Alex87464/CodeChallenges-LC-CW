// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

/*
Instructions:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(string) {

    // Possible solution:
    // 1. Convert the string to an array
    const stringToArray = string.toLowerCase().split('');
    let result = [];
    // 2. Create an auxiliary variable to take the index+1 position of the array
    let position = 0;
    let counter = 0;
    
    // Traverse the array
    for (let i = 0; i < stringToArray.length; i++) {

        // Increase +1 the position variable
        position += 1;

        for(let k = 0; k < position; k++) {

            // if( counter == position ) {
            //     counter++;
            //     // result.push('-')
            //     result.push( stringToArray[i].toUpperCase() )
            // } 

            result.push(stringToArray[i]);
        }
    }
    

    // console.log(` the result string is: ${result}`)
    console.log(` the result string is: ${result.join('')}`)

    return result;

}

accum("cwAt"); // Output -> "C-Ww-Aaa-Tttt"

/* 
Output examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" 
*/