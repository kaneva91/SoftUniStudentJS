function solve(input) {
    let arr = input.split(' '),
        raindeers = [];

    for (i = 0; i < arr.length; i += 1) {
        let word = arr[i];
        if (word.startsWith('*') && word.endsWith('*')
            && word[1] === word[1].toUpperCase() && word.slice(2) === word.slice(2).toLowerCase()) {
            raindeers.push(arr.splice(i, 1));
            i -= 1;
        }
    }
    console.log(raindeers.join(', '));
    console.log('*'.repeat(20));
    console.log(arr.join(' '));
}

solve("Oh my *Rudolf* dwarfs! This *Dasher* year's christmas *Prancer is about to be Comet* ruined because Santa has lost his deer and.");