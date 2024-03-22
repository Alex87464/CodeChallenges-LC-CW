// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155


function descendingOrder(n){

    const arr = Array.from(String(n), Number);
    const result = parseInt(arr.sort((a,b)=>b-a).join(''), 10);
    console.log(result)
    return result;
    
}

descendingOrder(1234569); // Output -> 987654321