// Summing a number's digits
// https://www.codewars.com/kata/52f3149496de55aded000410

function sumDigits(number) {
    let num = number.toString().split('');
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== '-') {
            sum += parseInt(num[i]);
        }
    }
    console.log(sum)
    return sum;
}

sumDigits(32) // Expected output -> 18