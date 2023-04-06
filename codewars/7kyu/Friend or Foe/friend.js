// Friend or Foe?
// https://www.codewars.com/kata/55b42574ff091733d900002f


const friends = ["Ryan", "Kieran", "Mark"];

// Solucion
const friend = (friends) => friends.filter((element) => element.length === 4);

friend(friends); // Output -> ["Ryan", "Mark"]