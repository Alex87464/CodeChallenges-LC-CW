// Third Angle of a Triangle
// https://www.codewars.com/kata/5a023c426975981341000014

function otherAngle(a, b) {

    return 180 - (a + b);

}

const otherAngleArrow = (a, b) => 180 - (a + b);

console.log(otherAngle(90, 45));