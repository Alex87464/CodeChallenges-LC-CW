// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f


const numbers = [1, 2, 2];

function squareSum(numbers){

    const squared = numbers.map(x => Math.pow(x, 2));
    const sum = squared.reduce((acumulator, element) => acumulator + element, 0);
    return sum;

}

squareSum(numbers); // Output -> 9 [1^2, 2^2, 2^2] 1+2+2 = 9