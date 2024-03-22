// Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];



function countPositivesSumNegatives(input) {
    // your code here

    const auxPos = [];
    const auxNeg = [];
    const result = [];

    let i = 0;

    if(input === [] || input === null) return [];

    // Recorro por completo mi array con el condicionante i < arr.length
    while (i < input.length) {
        // si el elemento en la posicion [i] es POSITIVO lo pusheo a mi array -> auxPos[]
        if(input[i] > 0){
            auxPos.push(input[i]);
        }
        // si el elemento en la posicion [i] es NEGATIVO lo pusheo a mi array -> auxNeg[]
        if(input[i] < 0){
            auxNeg.push(input[i]);
        }
        
        i++;
    }
    
    let sum = auxPos.length;

    const subTract = auxNeg.reduce((acumulator, value) =>{
        return acumulator + value;
    }, 0);


    result.push(sum)
    result.push(subTract);

    if(result[0] === 0 && result[1] === 0) return [];
    return result;

}

countPositivesSumNegatives(input); // Output -> [Cantidad total de numeros positivos , suma entre los negativos]