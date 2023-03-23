const string = 'hello';

function shortcut (string) {


    return string.replace(/[aeiou]/gi, '');

}


console.log(shortcut(string));