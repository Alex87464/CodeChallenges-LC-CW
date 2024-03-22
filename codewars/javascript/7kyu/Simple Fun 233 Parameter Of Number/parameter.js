// Simple Fun #223: Parameter Of Number
// https://www.codewars.com/kata/5902f1839b8e720287000028

/*
Task
TODO Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

Calculate the parameter of the given number n.

Input/Output
[input] integer n

A positive integer. It is guaranteed that no zero appears in n.

[output] an integer

The parameter of the given number.

Example
For n = 22, the output should be 4.

Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

For n = 1234, the output should be 120.

1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120

Useful link:
https://www.geeksforgeeks.org/javascript-program-to-find-lcm-of-two-numbers/

*/

function parameter(n) {
    // Transform the number 'n' to an array
    let numbers = String(n).split('').map( (num) => {
        return Number(num);
    });

    let sumResult = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue);
    let productResult = numbers.reduce((accumulator, currentValue) =>  accumulator * currentValue);

    
    // To calculate the LCM I can use the GCD (greatest common divisor) formula to determine the LCM
    function gcd(a, b) { // a & b are the sumResult and productResult
        for (let temp = b; b !== 0;) {
            b = a % b;
            a = temp;
            temp = b;
        }
        return a;
    }

    let gcdResult = gcd(sumResult, productResult);

    // console.log((sumResult*productResult) / gcdResult)
    return (sumResult*productResult) / gcdResult;

}


parameter(1234);