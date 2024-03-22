// Exclusive "or" (xor) Logical Operator
// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
function xor(a, b) {
    // TODO: Program Me
    if((a && !b) || (!a && b)){ // Siempre y cuando `a` sea distinto de `b` va a retornar true
        return true;
    } else{                     // Caso contrario retorna false
        return false;
    } 
}

