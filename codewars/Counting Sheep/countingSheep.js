// Conting Sheep
// https://www.codewars.com/kata/54edbc7200b811e956000556


// Descomentar la linea de abajo para que pueda tomar un array la funcion 

// const arrayOfSheep = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true, false, false, true , true,  true,  true,  true , false, false, true,  true];

function countSheeps(arrayOfSheep) {

    let aux = [];
    
    for(let i = 0; i < arrayOfSheep.length; i++){

        if(arrayOfSheep[i] == true ){
            
            aux.push(arrayOfSheep[i]);

        }
    
    }

    // console.log(aux);
    return aux.length;
    
}


// Descomentar esta linea para ver en consola el resultado
// console.log(countSheeps(arrayOfSheep));



/*
Solución con mejores practicas y más sencilla de usar:

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

*/