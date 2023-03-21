// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2){

    // Solucion poco optimizada
    if(flower1 % 2 == 0 && flower2 % 2 != 0){
        console.log(true);
        return true;
    } else if(flower1 % 2 != 0 && flower2 % 2 == 0){
        console.log(true);
        return true;
    } else{
        console.log(false)
        return false;
    }

    // Mejor solucion
    return flower1 % 2 !== flower2 % 2;

}

lovefunc(0, 0);