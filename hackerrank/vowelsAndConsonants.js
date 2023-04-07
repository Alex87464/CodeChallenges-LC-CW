
const s = 'javascriptloops';


function vowelsAndConsonants(s) {
    const vocales = [];
    const consonantes = [];

    for (let i = 0; i < s.length; i++) {
        const letra = s[i].toLowerCase();
        if ('aeiou'.includes(letra)) {
            vocales.push(letra);
        } else if (letra >= 'a' && letra <= 'z') {
            consonantes.push(letra);
        }
    }

    console.log(vocales.join('\n') + '\n' + consonantes.join('\n'));
}

vowelsAndConsonants(s);
/* Output: 
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
*/