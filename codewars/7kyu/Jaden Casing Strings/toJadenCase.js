// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6


String.prototype.toJadenCase = function () {
    const words = this.split(' ');

    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
};


// const toJadenCase = (string) => {

//     const arrText = string.toLowerCase().split(' ');

//     for(let i = 0; i < arrText.length; i++) {
//         arrText[i] = arrText[i][0].toUpperCase() + arrText[i].slice(1);
//     } 
//     console.log(arrText);

//     const result = arrText.join(' ');
//     console.log(result)
//     return result;
    
// }


toJadenCase("How can mirrors be real if our eyes aren't real");