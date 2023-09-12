// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

/*
Instructions:
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

function number(array) {
  // Creamos un array vacío para almacenar las líneas numeradas.
  const numberedLines = [];

  // Usamos un bucle 'for' para iterar a través de las líneas en el array de entrada.
  for (let i = 0; i < array.length; i++) {
    // Calculamos el número de línea actual sumando 1 a 'i' (los índices de arrays comienzan en 0).
    const lineNumber = i + 1;

    // Creamos una cadena que combina el número de línea, un colon y un espacio, y la línea actual.
    const line = `${lineNumber}: ${array[i]}`;

    // Agregamos la línea numerada al array 'numberedLines'.
    numberedLines.push(line);
  }

  // Devolvemos el array 'numberedLines' que contiene todas las líneas numeradas.
  return numberedLines;
}

number(["a", "b", "c"]); // ["1: a", "2: b", "3: c"] 


// Solución alternativa usando map
/*
    return array.map(function (line, index) {
        return (index + 1) + ": " + line;
    });
*/