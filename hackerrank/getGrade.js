const score = 15;

function getGrade(score) {
    let grade;

    if( score <= 30 && 25 < score) {
        grade = 'A';
    } else if(score <= 25 && score > 20) {
        grade = 'B'
    } else if(score <= 20 && score > 15) {
        grade = 'C'
    } else if(score <= 15 && score > 10) {
        grade = 'D'
    } else if(score <= 10 && score > 5) {
        grade = 'E'
    } else if(score <= 5 && score > 0) {
        grade = 'F'
    }

    console.log(grade);
    return grade;
}


getGrade(score); // Output -> D