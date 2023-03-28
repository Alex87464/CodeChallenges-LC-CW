// Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016


function rentalCarCost(d) {

    // Precio x dia = $40
    // Precio x 3 dias o mas = TotalXdia - $20
    // Precio x 7 dias o mas = TotalXdia - $50

    if(d < 3){
        return d*40;
    } else if(d < 7){
        return (d*40)-20;
    } else if(d >= 7){
        return (d*40)-50;
    }

}