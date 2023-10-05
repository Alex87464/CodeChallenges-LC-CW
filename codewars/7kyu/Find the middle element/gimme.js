// Find the middle element
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):
gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

function gimme (triplet) {

    // [...triplet] makes a copy of the original array
    // to prevent set the index of the middle number always on 1
    let sortArray = [...triplet].sort((a,b) => a-b);
    
    // ! This variable below can be removed an put just: sortArray[1] as parameter of the indexOf()
    let middleNumber = sortArray[1];
    
    // Index of the middle number
    return triplet.indexOf(middleNumber);

}

// Shorter solution
// function gimme (triplet) {
//     let sortArray = [...triplet].sort((a,b) => a-b);
//     return triplet.indexOf(sortArray[1]);
// }

gimme([-5.2, -10.6, 14]) // Expected output -> 0 because -5.2 is the middle number between -10.6 and 14