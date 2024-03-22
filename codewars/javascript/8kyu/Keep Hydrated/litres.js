// Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c


function litres(time) {

    // Cantidad de litros de agua que Nathan bebe en un tiempo `time`
    let waterLitres = 0.5 * time;

    // retorno la cantidad y redondeo hacia abajo
    return Math.floor(waterLitres)


    // Se puede reducir a una linea directamente multiplicando el tiempo por la cantidad de litros
    // que bebe Nathan:
    return Math.floor(time * 0.5); // También se puede dividir a la mitad 0.5 == 1/2 

}




litres(3);