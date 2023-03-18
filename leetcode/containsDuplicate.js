// EJERCICIO 217. Contains Duplicate

/*
En esta línea, se declara una matriz llamada nums y se inicializa con algunos datos de muestra.
En este caso, la matriz contiene los números 1, 2, 3, 4, 5, 5, 6, 7 y 8.
*/
const nums = [1,2,3,4,5,5,6,7,8];


/*
Esta es una función llamada containsDuplicate que toma una matriz como parámetro.
La función utiliza el método some() para iterar sobre la matriz y comprobar si alguno 
de los elementos cumple una cierta condición.
*/
var containsDuplicate = function(nums) {
    // La condición se define utilizando una función de flecha que toma dos argumentos: 
    // value, que es el elemento actual que se está procesando, 
    // y index, que es el índice de ese elemento en la matriz.
    return nums.some((value, index) => nums.indexOf(value) !== index);

    // Dentro de la función de flecha, utilizamos el método indexOf() para comprobar si el índice 
    // de la primera aparición del valor actual no es igual al índice actual. 
    // Si el índice de la primera aparición no es igual al índice actual, entonces eso significa
    //  que el valor actual es un duplicado.
    
};

console.log(containsDuplicate(nums));
// Esta línea llama a la función containsDuplicate con la matriz nums como parámetro y registra 
// el resultado en la consola. En este caso, el resultado es true porque la matriz 
// contiene un valor duplicado (el número 5 aparece dos veces en la matriz).

/*
En resumen, este código define una función que verifica si una matriz contiene algún duplicado 
mediante la iteración sobre la matriz y la comparación del índice de la primera aparición 
de cada elemento con su índice actual.
*/