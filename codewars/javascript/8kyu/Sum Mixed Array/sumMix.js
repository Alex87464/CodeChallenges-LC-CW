// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

const x = [9, 3, '7', '3'];

function sumMix(x){

    let toNumbers = x.map(Number);
    const sum = toNumbers.reduce((acumulator, value) =>{
        return acumulator + value;
    }, 0);

    console.log(toNumbers);

    console.log(sum);
    return sum;
    
}

sumMix(x);