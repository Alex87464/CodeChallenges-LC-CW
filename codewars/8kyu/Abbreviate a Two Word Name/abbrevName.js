// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3


function abbrevName(name){
    const arr = name.split(' ');
    return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
}


abbrevName('hola mundo'); // Output -> 'H.M'