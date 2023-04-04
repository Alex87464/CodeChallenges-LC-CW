// Remove the minimum
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
    // si el array esta vacio lo retorno
    if(numbers.length === 0) {
        return numbers;
    }

    // minIndex toma el indice o posicion del numero mas chico
    const minIndex = numbers.indexOf(Math.min(...numbers));

    // elimino el valor mas chico usando el metodo slice y concateno el siguiente numero al valor minimo
    const result = numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));

    return result;
}

removeSmallest([2, 2, 1, 2, 1]); // Output -> [2, 2, 2, 1]