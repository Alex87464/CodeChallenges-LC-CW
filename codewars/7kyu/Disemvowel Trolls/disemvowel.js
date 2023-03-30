// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e


function disemvowel(str) {

    const vowels = ['a','e','i','o','u'];
    let result = '';

    for(let i = 0; i < str.length; i++){
        const char = str[i].toLowerCase();
        
        if(vowels.includes(char)){
            // Si la letra actual es una vocal no hacer nada
        } else{
            // Si es una vocal agregarla a result
            result += str[i]
        }
    }

    console.log(result);
    return result;


}

disemvowel("Hola como estas"); // Output -> Hl cm sts