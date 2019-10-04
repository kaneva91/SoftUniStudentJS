function solve(arr){
    let output = arr.sort((a, b) => a-b);
    console.log(`${output[0]} ${output[1]}`);
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);