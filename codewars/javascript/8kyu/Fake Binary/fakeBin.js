// Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d


function fakeBin(x){

    return x.split('').map(n => n <= 5 ? 0 : 1).join('');


}

fakeBin('45385593107843568') // Output -> '01011110001100111