// Categorize New Member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/

function openOrSenior(data) {
  return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}

// Expected output -> ['Open', 'Senior', 'Open', 'Senior']
openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20],]); 

// Another input example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
