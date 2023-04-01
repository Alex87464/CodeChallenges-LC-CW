// Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb


function bmi(weight, height) {

    let bmi = weight / Math.pow(height, 2);
    console.log(bmi);

    if(bmi <= 18.5) {
        console.log('Underweight');
    } else if(bmi <= 25){
        console.log('Normal');
    } else if(bmi <= 30){
        console.log('Overweight');
    } else if(bmi > 30){
        console.log('Obese')
    }
    
    // Solucion con operador ternario
    // return bmi <= 18.5 ? 'Underweight' : bmi <= 25 ? 'Normal': bmi <= 30 ? 'Overweight': 'Obese';


}

bmi(80, 1.80); // Output -> 'Normal'