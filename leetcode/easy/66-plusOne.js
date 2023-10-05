// 66. Plus One
// https://leetcode.com/problems/plus-one/description/


function plusOne(digits) {
    
    let carry = 1;  // Initialize the carry to 1 for the initial increment.
    const result = [];

    for (let i = digits.length - 1; i >= 0; i--) {
        const currentSum = digits[i] + carry;
        carry = Math.floor(currentSum / 10);
        result.unshift(currentSum % 10);
    }

    if (carry > 0) {
        result.unshift(carry);
    }

    return result;
}

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]); 
//      [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4] <- Expected output
