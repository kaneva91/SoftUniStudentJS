function solve(number) {
    let numArray = number.toString().split("").map(x => Number(x));

    console.log(numArray.every((val, i, arr) => val === arr[0]));
    console.log(numArray.reduce((a, b) => a + b));
}

solve(2222222);
solve(1234);