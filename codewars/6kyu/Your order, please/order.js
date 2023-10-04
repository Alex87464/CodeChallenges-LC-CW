// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f

/*
TODO: Your task is to sort a given string. Each word in the string will contain a single number. 
TODO: This number is the position the word should have in the result.

? Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

! If the input string is empty, return an empty string. 
!The words in the input String will only contain valid consecutive numbers.

* Examples
* "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
* "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
* ""  -->  ""
*/

function order(words) {
  const order = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  };

  const array = words.split(" "); // El string se separa en palabras

  for (let i = 0; i < array.length; i++) {
    // Recorro el array de palabras

    const palabra = array[i]; // Asigno palabra a la palabra en la posicion i del array

    // Busca un numero dentro de la palabra
    const numeroEnPalabra = palabra.match(/\d+/); // Devuelve un array con el numero encontrado

    // Si el numero se encuentra, verifica que sea una clave en 'order'
    if (numeroEnPalabra && order.hasOwnProperty(numeroEnPalabra[0])) {
      // Si se cumple, asigna palabra al valor de la clave en el objeto 'order'
      order[numeroEnPalabra[0]] = palabra;
    }
  }

  const result = []; // Array para guardar las palabras ordenadas

  for (let key = 1; key <= 9; key++) {
    // Recorro el objeto 'order'
    const value = order[key]; // Asigno value al valor de la clave en la posicion key

    if (value !== null) {
      // Si value no es null, lo agrega al array 'result'
      result.push(value);
    }
  }
  if (result.length === 0) return "";

  console.log(result.join(" "));
  return result.join(" ");
}

/* Solucion usando bucles for anidados
function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
*/

order("is2 Thi1s T4est 3a"); // Expected -> "Thi1s is2 3a T4est"
