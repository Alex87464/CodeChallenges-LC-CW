// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b

const url = 'www.google.com';

function domainName(url){

    // Modificamos con .replace("", "") cada caso de 'http','www'
    url = url.replace("http://", "").replace("https://", "").replace("www.", "");
    
    return url.split(".")[0];

}

domainName(url); // Output -> google

