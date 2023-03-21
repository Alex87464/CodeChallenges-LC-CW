// Be Concise I - The Ternary Operator
// https://www.codewars.com/kata/56f3f6a82010832b02000f38

// TODO: Refactor and shorten the function
// Solucion más corta
const describeAge=(a)=>a<13?"You're a(n) kid":a<18?"You're a(n) teenager":a<65?"You're a(n) adult":"You're a(n) elderly";

function describeAge(age) {

    if (age <= 12) {
      return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
      return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
      return "You're a(n) adult";
    } else {
      return "You're a(n) elderly";
    }
    
}

