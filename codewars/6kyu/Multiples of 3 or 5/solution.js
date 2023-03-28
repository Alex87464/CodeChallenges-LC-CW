// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006


function solution(number) {
    
    const arr = [];
    for (let i = 0; i < number; i++) {
        arr.push(i);
    }

    const multiples = arr.map((num) =>{
        if(num % 3 === 0 || num % 5 === 0){
            return num;
        } else {
            return null;
        }
    }).filter(num => num != null).reduce((a, b) => a + b, 0);


    console.log(multiples);



}


solution(10); // Output -> 23 -> (3+5+6+9) 