function solve(input) {
    let text = input;
    text = text.split(' ');

    let result = text.filter(x => x.match(/#[a-z]+/gi)).
        map(x => console.log(x.substr(1)));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');