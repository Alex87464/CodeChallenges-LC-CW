// Do I get a bonus?
// https://www.codewars.com/kata/56f6ad906b88de513f000d96


function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`;
}

bonusTime(150, true); // Output -> 1500