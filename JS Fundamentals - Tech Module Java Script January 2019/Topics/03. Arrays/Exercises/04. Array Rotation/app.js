function solve(arr, rotations){
    let i,
        temp;
    for (i = 1; i <= rotations; i+= 1) {
        temp = arr.shift();
        arr.push(temp);
    }
    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);