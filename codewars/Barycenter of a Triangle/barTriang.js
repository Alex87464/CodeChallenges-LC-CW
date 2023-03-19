// Localize The Barycenter of a Triangle
// https://www.codewars.com/kata/5601c5f6ba804403c7000004



function barTriang(){

    const p1 = [4 ,6];    
    const p2 = [12,4];    
    const p3 = [10,10];
    const barycenter = [];


    // barycenter.push manda dos parametros:
    // (p1[0] + p2[0] + p3[0])/3 -> Las posiciones de X sumadas y divididas por 3
    // (p1[1] + p2[1] + p3[1])/3 -> Las posiciones de Y sumadas y divididas por 3 

    barycenter.push( ((p1[0] + p2[0] + p3[0])/3).toFixed(4), ((p1[1] + p2[1] + p3[1])/3).toFixed(4));
    // Detalle: El metodo .toFixed(4) formatea un numero a string y toma como argumento
    // la cantidad de decimales que se deben incluir en el string resultante.


    // Con el metodo .map() crea un nuevo arreglo a partir del ya creado anteriormente
    // la funcion parseFloat() se usa como argumento del map y este convierte el string a numeros
    return barycenter.map(parseFloat);
}

console.log(barTriang());