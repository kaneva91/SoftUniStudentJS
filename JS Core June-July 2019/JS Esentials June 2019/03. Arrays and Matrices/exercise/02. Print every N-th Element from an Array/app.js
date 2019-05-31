function solve(input) {
    let n = input.pop(),
        output = input.filter((x, i) => i % n === 0).map(x => console.log(x));
}

solve(['add', 'add', 'add', 'add']);

solve(['add', 'add', 'remove', 'add', 'add']);

solve(['remove', 'remove', 'remove']);