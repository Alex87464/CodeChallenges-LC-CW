// What is between
// https://www.codewars.com/kata/55ecd718f46fba02e5000029

function between(a, b) {

    const arr = [];
    for(let i = a; i <= b; i++){
        arr.push(i);
    }

    console.log(arr);
    return arr;

}

between(-2,2);