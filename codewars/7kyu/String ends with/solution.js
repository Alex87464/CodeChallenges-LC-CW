// String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
*/

function solution(str, ending) {
  console.log(str.slice(str.length - 2, str.length) == ending);
  return str.slice(str.length - ending.length, str.length) == ending;
}

solution('abc', 'bc'); // true
solution('abc', 'd'); // false
