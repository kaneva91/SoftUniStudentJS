function solve(words) {
    let result = new Map();
    for (word of words) {
        if (result.has(word)) {
            let currCount = result.get(word) + 1;
            result.set(word, currCount);
        }
        else {
            result.set(word, 1);
        }
    }
    
    [...result.entries()].
        sort((a, b) => b[1] - a[1]).
        forEach((x) => console.log(`${x[0]} -> ${x[1]} times`));
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);