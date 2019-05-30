function solve(arr) {
    console.log(arr.reduce((a, b) => a + b));
    console.log(arr.map(x => 1 / x).reduce((a, b) => a + b));
    console.log(arr.join(''));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16])