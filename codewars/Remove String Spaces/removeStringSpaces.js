//  "Remove String Spaces"
//  https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Relacion de problema: Manejo de strings

// Objetivo: Quitar los espacios a un string recibido por parámetro.

/*
Write a function that removes the spaces from the string, then return the resultant string.
Escribe una función que elimine los espacios de la cadena y devuelva la cadena resultante.

Ejemplo:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"

"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"

"8aaaaa dddd r     " -> "8aaaaaddddr"

*/

const x = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"; // -> "88Bifk8hB8BB8BBBB888chl8BhBfd"

function noSpace(x){
  var result = x.split(' ').join('')
  return result;
}


console.log(noSpace(x));


/*
El código define una función llamada noSpace que acepta un parámetro x, que se espera
que sea una cadena de texto.

La función utiliza el método split() de la cadena de texto para dividir 
la cadena en un array de subcadenas utilizando un espacio en blanco como separador. 
Luego, utiliza el método join() del array para unir las subcadenas sin espacios. 
Esto elimina todos los espacios en blanco de la cadena original.

Finalmente, la función devuelve la cadena de texto sin espacios.

En resumen, la función noSpace toma una cadena de texto y devuelve la misma cadena, pero
sin espacios en blanco.
*/
