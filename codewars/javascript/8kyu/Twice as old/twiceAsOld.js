// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dadYearsOld, sonYearsOld) {

    let yearsAgoTwiceAsOld = Math.abs(dadYearsOld - 2 * sonYearsOld);
    if (dadYearsOld < 2 * sonYearsOld) {
      return yearsAgoTwiceAsOld;
    } else if (dadYearsOld > 2 * sonYearsOld) {
      return yearsAgoTwiceAsOld;
    } else {
      return 0;
    }
}

twiceAsOld(36, 7); // Output -> 22