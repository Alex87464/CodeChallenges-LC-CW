// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381

const arr = [1, -2, 3, 4, 5] // Output -> 1+2+3+20 = 25

function positiveSum(arr) {

    const aux = [];
    let i = 0;

    // Recorro por completo mi array con el condicionante i < arr.length
    while (i < arr.length) {
        // si el elemento en la posicion [i] es mayor a 0 lo pusheo a mi array -> aux[]
        if(arr[i] > 0){
            aux.push(arr[i]);
        }
        // aumento el contador
        i++;
    }
    console.log(aux);

    //Aqui realizo la suma entre los elementos que quedaron en mi nuevo array de numeros positivos aux[]
    const sum = aux.reduce((acumulator, value) =>{
        return acumulator + value;
    }, 0);
    
    console.log(sum);
    return sum;

}

positiveSum(arr);

// Forma de verificar el signo de un numero con Math.Sign()
// Math.sign(n) retorna (-1, 0 o 1) dependiendo del tipo de signo que tenga el numero 
// que haya recibido por parametro.
// -1 = '- negativo'
//  0 = "neutro"
//  1 = "+ positivo"

// Ejemplo: 
// Math.sign(10) -> 1
// Math.sign(-7) -> -1
// Math.sign(0) -> 0
