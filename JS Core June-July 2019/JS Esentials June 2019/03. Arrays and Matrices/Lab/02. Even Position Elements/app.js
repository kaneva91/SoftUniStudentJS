function solve(input){
    let output = input.filter((a,i) =>i % 2 === 0);
    console.log(output.join(' '));
}

solve(['20', '30', '40']);
solve(['5', '10']);