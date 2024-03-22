// Isograms 
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){

    str = str.toLowerCase();

    // Creamos un objeto para almacenar las letras de la palabra
    let letters = {};
    // Recorremos cada letra de la palabra
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        // Si la letra ya ha sido vista antes, entonces no es un isograma
        if (letters[letter]) {
            return false;
        }
        // Si la letra no ha sido vista antes, la almacenamos en el objeto
        letters[letter] = true;
    }
    // Si llegamos hasta aquí, entonces la palabra es un isograma
    return true;

}

isIsogram('Dermatoglyphics'); // Output -> True