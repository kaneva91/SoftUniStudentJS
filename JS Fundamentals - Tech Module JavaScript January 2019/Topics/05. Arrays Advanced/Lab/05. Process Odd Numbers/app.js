function solve(input) {
    let output = input.filter((e, i) => i % 2 !== 0)
        .map(e => e * 2)
        .reverse()
        .join(' ');

    console.log(output);
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);