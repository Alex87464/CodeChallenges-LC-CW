// Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

const str = 'hola';

function removeChar(str){

    const arr = str.split('');
     
    if(str.length == 0) return str;
    
    if(arr.length >= 2){
        arr.shift();
        arr.pop();
        return arr.join('');
    } else {
        return arr.join('');
    }
   };
   
   
   
   

removeChar(str);
// Expecter output -> "ol"
   