function solve(text, word) {
    let pattern = new RegExp(word, 'g');
    let result = text.replace(pattern, '*'.repeat(word.length));
    console.log(result);
}

solve("A small sentence with some words", "small");