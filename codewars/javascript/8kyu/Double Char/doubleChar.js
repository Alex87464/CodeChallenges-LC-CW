// Double Char
// https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str){

    return str.split('').map((element) => element + element).join('').concat('');

}

// Solucion con arrow
// const doubleChar = (str) => str.split('').map((element) => element + element).join('').concat('');

doubleChar('Hola mundo') // Output -> 'HHoollaa  mmuunnddoo'