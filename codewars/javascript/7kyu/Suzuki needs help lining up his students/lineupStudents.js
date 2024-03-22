// Suzuki needs help lining up his students!
// https://www.codewars.com/kata/5701800886306a876a001031

let students = "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";

function lineupStudents(students) {
  var studentsArray = students.split(' ');

  studentsArray.sort(function(a, b) {
    if (a.length > b.length) {
      return -1;
    } else if (a.length < b.length) {
      return 1;
    } else {
      return b.localeCompare(a); // Orden alfabético descendente si tienen la misma longitud
    }
  });

  return studentsArray;
}
lineupStudents(students);

// expected output:
// lst = [
//   "Takehiko",
//   "Takayuki",
//   "Takahiro",
//   "Takeshi",
//   "Takeshi",
//   "Takashi",
//   "Tadashi",
//   "Takeo",
//   "Takao",
// ];