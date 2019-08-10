function solve(numbers) {
    let count = numbers.shift(),
        result = numbers.filter((e, i) => i < count);
    console.log(result.join(' '));
    result = numbers.filter((e, i) => i > numbers.length - count - 1);
    console.log(result.join(' '));
}


solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);