// A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

let queue = ['sheep', 'sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep']; // [7, 6, 5 -> wolf, 4, 3, 2, 1] 

function warnTheSheep(queue) {
    let counter = queue.length;
    
    for (let i = 0; i < queue.length; i++) {
        counter--;    
        if(queue[queue.length-1] === 'wolf') return 'Pls go away and stop eating my sheep';
        if(queue[i] === 'wolf') {
            return `Oi! Sheep number ${counter}! You are about to be eaten by a wolf!`; 
        }
    }
}

warnTheSheep(queue); // Output -> 'Oi! Sheep number 1! You are about to be eaten by a wolf!'


