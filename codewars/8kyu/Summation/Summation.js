// Grasshopper - Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030


function summation(num) {

    const arr = [];

    for(let i = 1; i <= num; i++){
        arr.push(i);
    }

    const sum = arr.reduce((acumulator, value) =>{
        return acumulator + value;
    }, 0);
    
    // console.log(sum);
    return sum;
    
}

summation(8);