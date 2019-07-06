function solve(arr) {
    let rotations = Number(arr.pop());
    rotations %= arr.length;
    while (rotations !== 0) {
        arr.unshift(arr.pop());
        rotations--;
    }
    console.log(arr.join(' '));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']);

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);