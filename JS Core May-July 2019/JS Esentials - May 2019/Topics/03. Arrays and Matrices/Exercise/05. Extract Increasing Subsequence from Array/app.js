function solve(input) {
    max = input[0];
    for (i = 1; i < input.length; i += 1) {
        if (max < input[i]) {
            console.log(max);
            max = input[i]
        }
    }
    console.log(max);
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([20, 3, 2, 15, 6, 1]);