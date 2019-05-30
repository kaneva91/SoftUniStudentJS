function solve(arr){
    arr.sort((a, b) => a.length !== b.length ? a.length - b.length : a > b);
    console.log(arr.join('\n'));
}

solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);