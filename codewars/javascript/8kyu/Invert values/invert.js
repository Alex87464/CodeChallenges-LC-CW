// Invert Values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

const numArray = [1,2,3,4,5];

function invert(array) {

    // Paso 1: recorrer el array y ver que cada posicion 
    array.forEach(function(num, index, array){
        array[index] = num * -1;
    });
    console.log(array);
}


invert(numArray);


