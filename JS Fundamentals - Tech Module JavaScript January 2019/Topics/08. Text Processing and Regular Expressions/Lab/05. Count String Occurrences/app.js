function solve(input, word) {
    input = input.split(' ');
    let result = input.filter(x => x === word);
    console.log(result.length);
}

solve("This is a word and it also is a sentence", "is");