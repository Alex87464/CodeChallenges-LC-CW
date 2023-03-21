// Reversed Words
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str){

    // Objetivo completar una funcion que invierta todas las palabras que se le pasen por parametros
    // Ejemplo: "Hola mundo" -> "mundo Hola"

    // Pasos:
    // 1) str.split(' ') Toma los elementos del string y los separa con un espacio ' ' y los guarda como array 
    // 2) .reverse() invierte las posiciones de los elementos alojados en el array
    // si tengo un array de 3 posiciones la posicion [0] pasa a ser la posicion [2] y la posicion [2] pasa a ser [0]
    let arrayWord = str.split(' ').reverse().join(' ');
    console.log(arrayWord);
    return arrayWord;

    // Solucion mas optimizada
    // return str.split(' ').reverse().join(' '); 
}

// Mismo resultado pero simplificando el formato de la funcion
const reverseWordsArrow = (str) => {str.split(' ').reverse().join(' ');}


reverseWords("Hola como estas"); // Output -> estas como Hola