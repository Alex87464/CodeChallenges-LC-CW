// Power
// https://www.codewars.com/kata/562926c855ca9fdc4800005b

const number = 10;

const power = 4;

function numberToPower(number, power) {
    
    let result = 1;

    for (let i = 0; i < power; i++) {

        result *= number;
        
    }



    return result;

}


console.log(numberToPower(number,power));