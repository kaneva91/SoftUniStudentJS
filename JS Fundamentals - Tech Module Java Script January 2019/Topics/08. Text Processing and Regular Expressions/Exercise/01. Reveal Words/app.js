function solve(firstParam, secondParam) {
    let words = firstParam.split(', ');
    let text = secondParam;

    for (let word of words) {

        text = text.replace('*'.repeat(word.length), word);

    }
    console.log(text);
}

solve('great',
    'softuni is ***** place for learning new programming languages');
solve('great, learning',
    'softuni is ***** place for ******** new programming languages');