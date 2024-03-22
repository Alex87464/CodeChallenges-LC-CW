// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// https://www.codewars.com/kata/56efc695740d30f963000557/train/typescript

/*
Define String.prototype.toAlternatingCase (or a similar function/method such as 
to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
see the initial solution for details) such that each lowercase letter becomes uppercase 
and each uppercase letter becomes lowercase. 

? Examples:
toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345")       === "12345"    // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
*/

export function toAlternatingCase(s: string): string {
  let text: string = s;
  let result: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    if (element === element.toLowerCase()) {
      result.push(element.toUpperCase());
    } else if (element === element.toUpperCase()) {
      result.push(element.toLowerCase());
    } else {
      result.push(element);
    }
  }

  return result.join('');
}
