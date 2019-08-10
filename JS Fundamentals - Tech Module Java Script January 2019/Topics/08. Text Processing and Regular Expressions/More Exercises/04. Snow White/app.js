function solve(paramOne, paramTwo) {
    let text = paramOne.split(' '),
        dwarfs = paramTwo.slice(),
        counter = 0;

    for (i = 0; i < text.length; i += 1) {
        if (text[i] === 'dwarf') {
            if (counter !== dwarfs.length) {
                text.splice(i + 1, 0, dwarfs[counter]);
                counter += 1;
                i += 1;
            }
            else {
                text.splice(i, 1);
                i -= 1;
            }
        }
    }
    console.log(text.join(' '));
}

solve("Yet another dwarf fairytale tragedy! There are dwarf so many dwarfs, is it dwarf possible to help dwarf Show white?",
    ["Doc", "Dopey", "Sleepy"]);