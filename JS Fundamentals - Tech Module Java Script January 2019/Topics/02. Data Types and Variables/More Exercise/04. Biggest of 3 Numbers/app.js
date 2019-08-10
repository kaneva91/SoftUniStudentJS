function solve(a, b, c){
    let biggest = Math.max(a, b);
    biggest = Math.max(biggest, c);
    console.log(biggest);
}

solve(-2, 7, 3);
solve(130, 5, 99);
solve(43, 43.2, 43.1);