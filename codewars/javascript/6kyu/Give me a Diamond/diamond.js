// Give me a Diamond
// https://www.codewars.com/kata/5503013e34137eeeaa001648

/*
Task
You need to return a string that looks like a diamond shape when printed
on the screen, using asterisk (*) characters. Trailing spaces should be
removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative,
as it is not possible to print a diamond of even or negative size.

? Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/


// Planteo:
/*
Tengo que verificar si la entrada de texto retorna un diamante
Que forma tiene un diamante?
                                 *
                                ***
                                 *

esto en texto se vería de la siguiente forma:
"*\n***\n *\n"
console.log(" *\n***\n *\n")

Como sería un diamante de 5?
  *
 ***
*****
 ***
  *

 esto en texto se vería de la siguiente forma:
 "  *\n ***\n*****\n ***\n  *\n"
    console.log("  *\n ***\n*****\n ***\n  *\n")

Como sería un diamante de 7?
     *
    ***
   *****
  *******
   *****
    ***
     *



! Limitaciones
Si el numero es par o negativo, retornar null

Cual es la estructura logica para hacer un diamante?
1. Un diamante siempre esta compuesto por un numero de asteristos '*' impar
2. Un diamante siempre tiene un espacio en blanco ' ' antes y despues de los asteriscos \n
3. Un diamante siempre tiene un salto de linea \n al final de cada linea
4. Un diamante siempre tiene un salto de linea \n al final de la ultima linea
5. Para formar un diamante siempre comienza en 1 y termina en 1 
*/

function diamond(n) {

    if(n % 2 === 0 || n < 0) {
        return null;
    }

    let diamante = '';

    for(let i = 1; i <= n; i += 2) {
        diamante += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }

    for(let i = n - 2; i >= 1; i -= 2) {
        diamante += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }

    console.log(diamante);
    return diamante;

}

diamond(7);