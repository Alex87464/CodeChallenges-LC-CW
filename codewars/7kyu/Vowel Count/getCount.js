// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

const str = 'abracadabra';

function getCount(str) {
    
    // Creo un objeto que contenga como clave la vocal y como valor inicial 0
    const cuenta ={
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0,
    }

    // recorro el string
    for(let i = 0; i < str.length; i++){
        // char es mi variable donde voy a tomar cada posicion en i y la voy a convertir a minúscula
        const char = str[i].toLowerCase();
        // verifico si en mi objeto {cuenta} esta el char y en caso de encontrar coincidencia sumo +1
        if(cuenta.hasOwnProperty(char)) {
            cuenta[char]++;
        }
    }

    // por último retorno la suma de los valores de cada vocal
    return cuenta['a']+cuenta['e']+cuenta['i']+cuenta['o']+cuenta['u'];



}

getCount(str); // Output -> 5