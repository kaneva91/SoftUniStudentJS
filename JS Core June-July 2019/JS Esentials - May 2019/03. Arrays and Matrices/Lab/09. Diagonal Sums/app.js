function solve(input) {
    let sums = { main: 0, second: 0 };

    for (i = 0; i < input.length; i += 1) {
        sums.main += input[i][i];
        sums.second += input[i][input.length - i - 1];
    }

    console.log(`${sums.main} ${sums.second}`);
}

solve([[20, 40],
[10, 60]]);

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);