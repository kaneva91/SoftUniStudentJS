function solve(input) {

    let [x1, y1, x2, y2] = input,
        result1 = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2),
        result2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2),
        result3 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${result1 % 1 === 0 ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result2 % 1 === 0 ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result3 % 1 === 0 ? 'valid' : 'invalid'}`);
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);



