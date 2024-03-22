// Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

const numbers = [34, 15, 88, 2];
function smallestInt(numbers) {
    
    let min = Math.min(...numbers);

    console.log(min)

}

smallestInt(numbers) // Output -> 2