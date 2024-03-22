// Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {

/*
    Primero, definimos un objeto llamado rules que contiene las posibles combinaciones 
    ganadoras del juego "rock paper scissors". Cada propiedad de este objeto corresponde a 
    una opción posible (rock, paper, scissors) y su valor es otro objeto que contiene las 
    opciones que vencen a la opción de la propiedad.
*/
    const rules = {
        rock: {scissors: "Player 1 won!", paper: "Player 2 won!"},
        paper: {rock: "Player 1 won!", scissors: "Player 2 won!"},
        scissors: {paper: "Player 1 won!", rock: "Player 2 won!"},
    }

/*
    Creamos una variable llamada result que busca en el objeto rules la opción ganadora. Para 
    ello, utilizamos las opciones elegidas por los jugadores p1 y p2 como índices.
*/    
    const result = rules[p1][p2];

//  Finalmente retornamos el resultado de la partida o "Draw!"
    return result || "Draw!";

};

