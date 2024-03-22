// If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num){

    let i = 1;
    result = '';
    while(i <= num){
        result += `${i} sheep...`;
        i++;
    }
    console.log(result);
    return result;
}