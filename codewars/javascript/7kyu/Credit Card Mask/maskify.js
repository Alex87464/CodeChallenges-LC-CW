// Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc

/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

? "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

function maskify(cc) {
  if (cc.length < 4) return cc;

  const ccToArr = cc.split("");
  let hiddenNumbers = [];

  for (let i = 0; i < ccToArr.length - 4; i++) {
    hiddenNumbers.push("#");
  }

  const lastFourDigits = ccToArr.slice(-4).join("");

  console.log(hiddenNumbers.join("") + lastFourDigits);
  return hiddenNumbers.join("") + lastFourDigits;
}

// maskify('11111'); // Expected output -> #1111
maskify("12345"); // Expected output -> #2345
