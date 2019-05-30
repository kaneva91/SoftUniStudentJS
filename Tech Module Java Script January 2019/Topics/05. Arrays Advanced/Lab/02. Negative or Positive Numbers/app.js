function solve(arr) {
    let i,
        temp,
        output = [];
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] < 0) {
            output.unshift(arr[i]);
        }
        else {
            output.push(arr[i]);
        }
    }
    console.log(output.join('\n'));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);