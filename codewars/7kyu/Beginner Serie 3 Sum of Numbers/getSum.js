// Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053


function getSum(a, b){

    let start = a;
    let end = b;

    if (a > b) {
      start = b;
      end = a;
    }

    let arr = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    
    const initialValue = 0;
    arr = arr.reduce((acumulator, currentValue) => acumulator + currentValue, initialValue);

    return arr;
  }

getSum(5, -1);