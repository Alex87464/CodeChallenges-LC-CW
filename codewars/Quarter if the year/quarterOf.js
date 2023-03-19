// Quarter of The Year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
    // Your code here

    if(month === 0 || month > 12) return null;

    if(month > 0 && month <= 3){
        return 1;
    } else if(month > 3 && month <= 6){
        return 2;
    } else if(month > 6 && month <= 9){
        return 3;
    } else if(month > 9 && month <= 12){
        return 4;
    }

    // Ahora con operador ternario:
    return  month > 0 && month <= 3 ? 1:
            month > 3 && month <= 6 ? 2:
            month > 6 && month <= 9 ? 3:
            month > 9 && month <= 12 ? 4 : null;



    // Operador ternario optimizado

    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;




    
}

quarterOf(10);