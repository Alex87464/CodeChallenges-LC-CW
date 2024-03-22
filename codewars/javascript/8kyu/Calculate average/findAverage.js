// Calculate average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
    const sum = array.reduce((acumulator, value) =>{
        return acumulator + value;
    }, 0);

    return sum/array.length;



}