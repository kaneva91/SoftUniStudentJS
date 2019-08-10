function solve(arr) {
    let words = arr.shift().split(' ');
    let tracker = new Map();

    for (const word of words) {
        tracker.set(word, 0);
    }

    for (const word of arr) {
        if (tracker.has(word)) {
            let currCount = tracker.get(word) + 1;
            tracker.set(word, currCount);
        }
    }

    [...tracker.entries()].sort((a, b) => b[1] - a[1]).
        forEach(x => console.log(`${x[0]} - ${x[1]}`));
}

solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
);