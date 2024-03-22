// Is this a triangle?
// https://www.codewars.com/kata/56606694ec01347ce800001b



function isTriangle(a,b,c){

    if(a <= 0 || b <= 0 || c <= 0) return false;
    if (a + b > c && a + c > b && b + c > a) {
        return true;
      } else {
        return false;
    }

    // Mejor solucion
    // return a + b > c && a + c > b && c + b > a;


}