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

countSheep(2);