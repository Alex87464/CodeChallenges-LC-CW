// Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

const arr1 = [1,2,3];
const arr2 = [4,5,6];

function arrayPlusArray(arr1, arr2) {

    const sum = arr1.map((num, indx) => num + arr2[indx]).reduce((acumulator,value)=> acumulator + value);
    console.log(sum)
    return sum;

}

arrayPlusArray(arr1, arr2);