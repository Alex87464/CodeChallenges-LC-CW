// Regex validate PIN code
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {

    pin = pin.split('');
    const hasString = pin.some(element => /[^0-9]/.test(element));
    return hasString ? false : pin.length === 4 || pin.length === 6;

}

validatePIN('-12345');