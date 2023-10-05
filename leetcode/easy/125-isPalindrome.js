// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/


function isPalindrome(s) {
    
    const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
    
}

isPalindrome("P0");