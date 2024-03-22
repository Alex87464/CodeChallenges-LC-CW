// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035

const numbers = '1 2 3';

function highAndLow(numbers){

    let num = numbers.split(" ").map(Number);
    var max = Math.max.apply(null, num);
    var min = Math.min.apply(null, num);

    console.log(`${max.toString()} ${min.toString()}`);
    return `${max.toString()} ${min.toString()}`;
    
}

highAndLow(numbers); // Output -> 3 1