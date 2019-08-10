function solve(arr) {
    let output = [];
    arr.sort((a, b) => a - b);

    while (arr.length > 0) {
        output.push(arr.pop());
        output.push(arr.shift());

    }
    console.log(output.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);