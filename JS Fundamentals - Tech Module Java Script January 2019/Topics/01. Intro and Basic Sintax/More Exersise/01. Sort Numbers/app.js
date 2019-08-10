function solve(input){
    input = input.sort().reverse();
    for (index in input) {
        console.log(input[index]);
    }
}
solve([ '2', '1', '3' ]);
solve([ '-2', '1', '3' ]);
solve([ '0', '0', '2' ]);