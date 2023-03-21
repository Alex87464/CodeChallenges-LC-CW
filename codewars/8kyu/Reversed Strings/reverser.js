// Reversed String
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Mi solucion:
const str = 'hello';

function solution(str){
  
    
    let arrayed = str.split('');
    let text = '';
    arrayed.reverse();


    return arrayed.join(text);   

}


console.log(solution(str));


// Solucion optimizada
function solution(str){
    return str.split('').reverse().join('');  
}