function solve(sequence, bomb) {
    let index,
        removeCount = bomb[1];

    while (true) {
        index = sequence.indexOf(bomb[0]);
        if (index != -1) {
            sequence.splice(Math.max(0, index - removeCount), removeCount * 2 + 1);
        }
        else {
            break;
        }
    }
    console.log(sequence.reduce((a, b) => a + b, 0));
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]); 