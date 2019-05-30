function solve(input) {
    let words = input.split(' ').map(w => w.toLowerCase());
    let wordOccurance = new Map();

    for (const word of words) {
        if (wordOccurance.has(word)) {
            let currCount = wordOccurance.get(word) + 1;
            wordOccurance.set(word, currCount);
        }
        else {
            wordOccurance.set(word, 1);
        }
    }

    let result = [...wordOccurance.entries()].
        filter(x => x[1] % 2 != 0).
        map(x => x[0]);

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');