function solve(paramOne, paramTwo) {

    let words = paramTwo.split(' '),
        match = paramOne.toLowerCase();

    for (i = 0; i < words.length; i += 1) {
        let word = words[i].toLowerCase();
          
        if (word.includes(match)) {
            words.splice(i, 1);
            i -= 1;
        }
    }
    words.map((e, i) => console.log(`idx[${i}] -> ${e}`));
}

solve('wel', 'Welcome to the Software University!');