// Cats and shelves
// https://www.codewars.com/kata/62c93765cef6f10030dfa92b
/*
Description
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
*/

// Explicacion:
// Los estantes de la izquierda son numeros siempre numeros impares
// Los estantes de la derecha son numeros pares
// El gato solo puede saltar 1 o 3 estantes

//* Regla 1: El gato no puede saltar directamente al estante de arriba
// es decir si el numero es impar no puede pasar directamente a otro numero impar
// ! Por ejemplo no puede ir del estante 1 al 3 o del 2 al 4 

//? Si quisiera ir del estante 1 al 3, tendría que ir primero al 2 y luego al 3 dando como resultado 2 saltos

// El gato puede saltar hasta dos estantes siempre y cuando se cumpla la `regla 1`
// Por ejemplo puede pasar del estante 1 al estante 2 o al 4

function solution(start, finish) {

    // contador de saltos
    let saltos = 0;
    let posicion = 0;
    // Casos de salto directo
    // // Si start es impar y finish es par y la diferencia entre ambos no es mayor a 3 puede saltar directo
    // if (start % 2 !== 0 && finish % 2 === 0 && finish - start <= 3) {
    //     saltos = 1;
    // }
    // // Si start es par y finish es impar y la diferencia entre ambos no es mayor a 3 puede saltar directo
    // if (start % 2 === 0 && finish % 2 !== 0 && finish - start <= 3) {
    //     saltos = 1;
    // }

    salto + 1





}

solution(1, 5); // 2
