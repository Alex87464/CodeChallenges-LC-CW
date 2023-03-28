// Stringy Strings
// https://www.codewars.com/kata/563b74ddd19a3ad462000054

const size = '10'

function stringy(size) {

    const arr = [];

    let counter1 = 0;
    let counter2 = 2;

    while(counter1 < size){
        counter1++;
        counter2 = (counter2+1)%2;
        console.log(`Contador 1: ${counter1}, Contador 2: ${counter2}`);
        arr.push(counter2);
    }

    console.log(arr.join(''))
    return(arr.join(''));

}

stringy(size);