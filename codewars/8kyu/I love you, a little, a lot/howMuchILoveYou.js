// I love you, a little , a lot, passionately ... not at all
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

// 1 "I love you"
// 2 "a little"
// 3 "a lot"
// 4 "passionately"
// 5 "madly"
// 6 "not at all"


function howMuchILoveYou(nbPetals) {


    const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

    let contador1 = 0;
    let contador2 = -1;
    while(contador1 < nbPetals){

        contador1++;

        contador2 = (contador2+1)%6;

        // console.log para verificar los valores de los contadores
        // console.log(`Contador 1: ${contador1}, Contador 2: ${contador2}`);

    }
    // console.log(contador2-1);
    console.log(arr[contador2]);


}

howMuchILoveYou(7); // Output -> "I love you"
