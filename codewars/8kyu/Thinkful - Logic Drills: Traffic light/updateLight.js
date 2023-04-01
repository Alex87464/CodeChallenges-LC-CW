// Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {

    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

updateLight('green'); // Output -> 'yellow'