// Selective fer of numbers
// https://www.codewars.com/kata/55b1fd84a24ad00b32000075

/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12
Tuesday --> numbers greater than 95
Wednesday --> 34
Thursday --> 0
Friday --> numbers divisible by 2
Saturday --> 56
Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/

/**
 * 
 * @param {String} day 
 * @param {Number} num 
 */
var AmIAfraid = function(day, num) {

    const badDay = {
        Monday: 12,
        Tuesday: 95,
        Wednesday: 34,
        Thursday: 0,
        Friday: 0,
        Saturday: 56,
        Sunday: 666,
    }


    if (day === 'Monday' && num === badDay.Monday) return true;
    if (day === 'Tuesday' && num > badDay.Tuesday) return true;
    if (day === 'Wednesday' && num === badDay.Wednesday) return true;
    if (day === 'Thursday' && num === badDay.Thursday) return true;
    if (day === 'Friday' && num % 2 === 0) return true;
    if (day === 'Saturday' && num === badDay.Saturday) return true;
    if (day === 'Sunday' && (num === badDay.Sunday || num === -badDay.Sunday)) return true;

    return false;

}