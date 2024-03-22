// The Feast of Many Beasts
// https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {

    let arr = beast.split('');
    let arr2 = dish.split('');

    return arr[0] === arr2[0] && arr[arr.length-1] === arr2[arr2.length-1] ? true : false;


}

feast("great blue heron", "garlic naan"); // Output -> true