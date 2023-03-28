// Digit*Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020

let num = 765;

function squareDigits(num){

    const digits = String(num).split('').map((numero)=>{
        return numero*numero;
    });
    const squaredNum = parseInt(digits.join(''), 10); // convierte la cadena resultante en un número entero
    
    console.log(squaredNum);
}

squareDigits(num); // Output -> 493625 -> 7^2=49, 6^2=36, 5^2=25. (49-36-25)