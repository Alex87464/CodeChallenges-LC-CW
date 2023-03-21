const classPoints = [41, 75, 72, 56, 80, 82, 81, 33];
const yourPoints = [50];

function betterThanAverage(classPoints, yourPoints) {

    classPoints.push(Number(yourPoints));


    // Esta funcion suma todos los elementos que contiene el array.
    const sum = classPoints.reduce((acumulator, value) =>{
        return acumulator + value;
    }, 0);


    // Aca recorro todo el array y comparo si el promedio resulta ser mayor a mis puntos
    // retorno false, caso contrario continua
    for (let i = 0; i < classPoints.length; i++) {
        if(sum/classPoints.length > yourPoints){
            return false;
        } else{
            return true;
        }
    }

}
  

  console.log(betterThanAverage(classPoints, yourPoints));