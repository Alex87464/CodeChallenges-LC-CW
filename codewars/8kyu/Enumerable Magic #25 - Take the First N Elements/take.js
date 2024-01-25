// Enumerable Magic #25 - Take the First N Elements
// https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript

function take(arr,n) {
    return arr.slice(0, n);
}

take([0, 1, 2, 3, 5, 8, 13], 3); // Should return first 3 elements -> [0, 1, 2]