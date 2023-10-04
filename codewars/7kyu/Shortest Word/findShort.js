// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

/*
TODO:   Simple, given a string of words, return the length of the shortest word(s).
?       String will never be empty and you do not need to account for different data types.
*/


function findShort(string){
    const arr = string.split(' ')
    let minLength = arr[0].length;

    for (let i = 0; i < arr.length; i++) { // Recorro el array
        const actualLength = arr[i].length; // Tomo el length de cada elemento que voy encontrando

        // Si el length del elemento que recorro es menor al del primer elemento
        if( actualLength < minLength ){ 
            minLength = actualLength; // Asigno el valor actual al lengthMinimo
        }
        // Continúo con el loop y repito
    }
    
    return minLength;
}

// Solución alternativa con mejores prácticas
// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }


findShort("bitcoin take over the world maybe who knows perhaps"); // Expected output -> 3