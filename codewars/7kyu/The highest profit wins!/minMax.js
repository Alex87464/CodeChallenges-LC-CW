// The highest profit wins!
// https://www.codewars.com/kata/559590633066759614000063

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

minMax([1, 2, 3, 4, 5]); // [1,5]
