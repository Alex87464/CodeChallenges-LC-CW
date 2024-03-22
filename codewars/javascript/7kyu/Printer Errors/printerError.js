// Printer Errors
// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {

    // Posible solucion:
    // 1. Crear una variable auxiliar como contador
    // 2. Recorrer el string
    // 3. Crear una variable 'letra' que tome el valor del char en la posicion 'i' de mi texto
    // 4. Creo la condicion en el caso de que la letra este fuera del rango de 'a' o 'm' aumente mi contador
    // 5. Retorar: `${contador}/${s.length}`


    let contador = 0;

    for (let i = 0; i < s.length; i++) {
        let letra = s[i];
        if (letra < "a" || letra > "m") {
            contador++;
        }
    }
    
    console.log(`${contador}/${s.length}`) // `contador/s.length`
    return `${contador}/${s.length}`;

}

printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz') // Output -> "8/22"

// Note: Letters 'a' to 'm' are allowed