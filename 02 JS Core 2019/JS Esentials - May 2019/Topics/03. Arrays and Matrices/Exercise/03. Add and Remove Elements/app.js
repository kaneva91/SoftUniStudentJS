function solve(input) {
    let output = [],
        n = 0;
    input.forEach(element => {

        element === 'add' ? output.push(n + 1) :
            output.pop();
        n++;
    });

    console.log(output.length === 0 ? "Empty" : output.join('\n'));
}

solve(['add',
    'add',
    'add',
    'add']);

solve(['add',
    'add',
    'remove',
    'add',
    'add']);