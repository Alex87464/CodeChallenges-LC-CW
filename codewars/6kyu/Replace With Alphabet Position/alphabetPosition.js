// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    // Creo un objeto alphabet para almacenar las letras de la `a` a la `z`
    const alphabet = {};
    let value = 1;

    // Se recorre el rango de códigos ASCII correspondiente a las letras minúsculas del alfabeto inglés
    // https://theasciicode.com.ar/ -> Columnas con los valores de la `a`-`z` (97 a 122 minúsculas)
    for (let i = 97; i <= 122; i++) {
        const letter = String.fromCharCode(i);
        /*
        Creo una variable letter  que va a almacenar un string que va a venir del metodo String.fromCharCode(i);
        Donde i reperesenta un numero que le corresponde al código ASCII de una letra, en este caso comienza por
        el numero 97 que le corresponde a la letra 'a' y termina en el 122 que es de la letra 'z'
        */

        // Se agrega la letra como propiedad del objeto alphabet y le doy el valor correspondiente        
        alphabet[letter] = value; // En la primer iteración esto sería -> alphabet['a'] = 1; en la 2da alphabet['b'] = 2...
        value++;
    }

    // Creo la variable donde voy a guardar el resultado de la conversion de la palabra
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const letter = text[i].toLowerCase(); // Convierto a minúscula la letra en la posicion i
        const position = alphabet[letter]; // Busco el valor de la letra en el objeto {alphabet}
        if(position) { // Si la letra existe en el objeto {alphabet}
            result += position + " "; // Agrego el valor a la variable result con un espacio de por medio
        }
    }

    return result.trim();


}

alphabetPosition("The sunset sets at twelve o' clock."); 
// Expected output -> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )