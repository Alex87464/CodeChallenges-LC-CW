// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {

    if(Math.sign(num) == 1){
        return num*-1;
    } else{
        return num*1;
    }

}