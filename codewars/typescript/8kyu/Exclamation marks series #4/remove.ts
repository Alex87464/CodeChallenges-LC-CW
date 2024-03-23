// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/typescript
/*
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

? Examples:
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"
*/
export function remove(s: string): string {
  let newString: string = s.replace(/!/g, '');
  if (newString.charAt(newString.length - 1) !== '!') {
    newString += '!';
  }

  return newString;
}
