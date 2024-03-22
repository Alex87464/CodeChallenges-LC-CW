// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028


function getMiddle(s) {

    // Paso 1 chequeo si la palabra es par o impar
    // Esto me sirve para saber si voy a tener que retornar dos letras (caso par) o solo una (caso impar)
    // Ejemplo: 'oso' -> 3 letras -> impar -> 's' || 'cosa' -> 4 letras -> par -> 'os'

    if(s.length%2 == 0){
        console.log(s[s.length/2-1] + s[s.length/2])
        return s[s.length/2-1] + s[s.length/2];
    } else{
        console.log(s[Math.floor(s.length/2)]);
        return s[Math.floor(s.length/2)];
    }

    // Operador ternario
    // return s.length%2 == 0 ? s[s.length/2-1] + s[s.length/2] : s[Math.floor(s.length/2)];
}
// Arrow solution
// const getMiddle = (s) => s.length%2 == 0 ? s[s.length/2-1] + s[s.length/2] : s[Math.floor(s.length/2)];

getMiddle('a') // Output ->  