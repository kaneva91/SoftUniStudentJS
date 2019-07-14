function solve(input) {
    let output = []
    input.forEach(element => {
        element >= 0 ? output.push(element) : output.unshift(element);
    });

    output.map(x => console.log(x));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1])