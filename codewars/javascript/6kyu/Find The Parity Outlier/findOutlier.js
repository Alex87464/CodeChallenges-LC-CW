// Find The Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

/* 
You are given an array (which will have a length of at least 3, but could be very large)
containing integers. 
The array is either entirely comprised of odd integers or entirely 
comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples:
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

function findOutlier(integers) {
  const oddNumbers = integers.filter((num) => num % 2 !== 0);
  const evenNumbers = integers.filter((num) => num % 2 === 0);

  return oddNumbers.length === 1 ? oddNumbers[0] : evenNumbers[0];
}

console.log(findOutlier([0, 1, 2]));

// First Solution:
// function findOutlier(integers) {
//   let oddCounter = 0; // Impar
//   let evenCounter = 0; // Par

//   const result = [];

//   for (let i = 0; i < integers.length; i++) {
//     const element = integers[i];
//     if (element % 2 != 0) {
//       oddCounter += 1;
//     } else if (element % 2 === 0) {
//       evenCounter += 1;
//     }
//   }

//   if (oddCounter > evenCounter) {
//     for (let j = 0; j < integers.length; j++) {
//         const element = integers[j];
//         if(element % 2 === 0) result.push(element);
//     }
//   } else if (evenCounter > oddCounter) {
//     for (let k = 0; k < integers.length; k++) {
//         const element = integers[k];
//         if(element % 2 != 0) result.push(element);
//     }
//   }
//   return result[0];
// }

// findOutlier([0, 1, 2]); // Should return 1 (the only odd number)
