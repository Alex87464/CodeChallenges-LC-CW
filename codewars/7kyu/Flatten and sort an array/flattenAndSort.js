// Flatten and sort an array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

/*
Challenge:
Given a two-dimensional array of integers, return the flattened version of the array 
with all the integers in the sorted (ascending) order.

Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically. 
For more information, please consult:
http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/

function flattenAndSort(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const arreglo = array[i];
    for (let j = 0; j < arreglo.length; j++) {
      result.push(arreglo[j]);
    }
  }

  return result.sort((a, b) => a - b);
}

flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]); // Expected output -> [1, 2, 3, 4, 5, 6, 100]
