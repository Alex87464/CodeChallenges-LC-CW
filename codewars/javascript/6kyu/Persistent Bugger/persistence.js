// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec


/*
TODO: Write a function, persistence, that takes in a positive parameter num and returns 
TODO: its multiplicative persistence, which is the number of times 
TODO: you must multiply the digits in num until you reach a single digit.

? For example (Input --> Output):
* 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
* 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
* 4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
    // Counter to follow the steps to get 1 digit number
    let count = 0;
    
    // Convert the number to a string to work with its digits
    while (num >= 10) {
      // Convert the number to a string and split it into an array of digits
      const digits = num.toString().split('').map(Number);
      
      // Multiply all the digits together
      num = digits.reduce((product, digit) => product * digit);
      
      // Increment the count
      count++;
    }
    
    return count;
  }

persistence(999); // 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
