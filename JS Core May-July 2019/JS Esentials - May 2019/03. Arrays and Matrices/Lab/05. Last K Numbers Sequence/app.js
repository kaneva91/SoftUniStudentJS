function solve(n, k) {
    let output = [1, 1];

    while (n !== 2) {
        let sliced = output.slice(-k);
        output.push(sliced.reduce((a, b) => a + b));
        n--;

    }
    console.log(output);
}

solve(6, 3);
solve(8, 2);