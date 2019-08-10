function solve(n, k) {
    let arr = [1],
        tempArr = [];

    while (n != 1) {
        tempArr = arr.filter((e, i) => i > arr.length - k - 1)
        arr.push(tempArr.reduce((a, b) => a + b));
        n -= 1;
    }
    console.log(arr.join(' '));
}

solve(6, 3);
solve(8, 2);