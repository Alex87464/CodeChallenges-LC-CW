// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a

/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

? Examples input/output:
* XO("ooxx") => true
* XO("xooxx") => false
* XO("ooxXm") => true
* XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
* XO("zzoo") => false
*/

function XO(str) {
    //code here
    let xCounter = 0;
    let oCounter = 0;

    for( let x of str.toLowerCase() ) {
        if(x === 'x'){
            xCounter++;
        }
        if(x === 'o'){
            oCounter++;
        }
    }

    return  xCounter == oCounter;
}

XO('ooxXm'); // Expected output -> true


// Another solution
/*
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
*/

// Resource to understand 'for of' loop:
// https://www.w3schools.com/js/js_loop_forof.asp