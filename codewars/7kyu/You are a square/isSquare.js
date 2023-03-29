// You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e


var isSquare = function(n){
    let number = Math.sqrt(n);    
    return Number.isInteger(number) ? true : false
}

isSquare(81); // Output -> true