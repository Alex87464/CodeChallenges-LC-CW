// "String Repeat"
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

/*
Escribe una función que acepte un número entero n y una cadena s como parámetros,
y devuelva una cadena de s repetida exactamente n veces.

Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.
*/

/*
Ejemplos:
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

const s = "Hello"

const n = 10;

function repeatStr (n, s) {


    const repeatedString = s.repeat(n);

    console.log(repeatedString); // Output -> 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHello
    return repeatedString;
}

repeatStr(n,s);

