// Reversed sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const n = 7;


function revers(n) {
    const arr = [];
    if(n > 0){

        for(let i = 1; i <= n; i++){
            arr.push(i);
        }

    }

    console.log(arr.reverse());
    return arr.reverse();
}

revers(n);