// Count the divisors of a number
// https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
}
getDivisorsCnt(12); // Expected output -> 6 (12: 1, 2, 3, 4, 6 and 12)
