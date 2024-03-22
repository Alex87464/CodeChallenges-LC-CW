// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

const numbers = [19, 5, 42, 2, 77]

function sumTwoSmallestNumbers(numbers) {  

    numbers = numbers.sort(function(a, b) { return a - b; });
    console.log(numbers[0]+numbers[1]);
    return numbers[0]+numbers[1];

}

sumTwoSmallestNumbers(numbers); // Output -> 7 -> 5+2