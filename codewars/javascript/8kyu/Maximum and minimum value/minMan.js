// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989

const list = [-10,1,2,727,4,5];

var min = function(list){
    return Math.min(...list);
}


var max = function(list){
    return Math.max(...list);
}


min(list); // Output -> -10
max(list); // Output -> 727
console.log(min(list),max(list));
