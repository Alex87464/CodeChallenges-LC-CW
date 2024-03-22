//Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  var newString = str.replace(/[_-]./g, function (match) {
    // Convierte la segunda letra (la letra después del guión) en mayúscula
    return match.charAt(0) + match.charAt(1).toUpperCase();
  });

  return newString.replace(/[_-]/g, "");
}
toCamelCase("the_stealth_warrior");
// toCamelCase("the-stealth-warrior"); // Expected output -> 'theStealthWarrior'
