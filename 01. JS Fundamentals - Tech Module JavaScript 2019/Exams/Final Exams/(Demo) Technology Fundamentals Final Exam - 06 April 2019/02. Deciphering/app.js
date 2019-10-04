function solve(arr) {
    let pattern = /^[d-z{}#|]+$/g;
    let [code, replacements] = arr;

    replacements = replacements.split(' ');

    if (pattern.exec(code) !== null) {
        code = code.split('');

        for (i = 0; i < code.length; i += 1) {
            let chr = code[i].charCodeAt(0) - 3;
            code[i] = String.fromCharCode(chr);
        }

        code = code.join('');
        code = code.replace(new RegExp(replacements[0], 'g'), replacements[1])
        console.log(code);
    }
    else {
        console.log('This is not the book you are looking for.');

    }
}

solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an']);