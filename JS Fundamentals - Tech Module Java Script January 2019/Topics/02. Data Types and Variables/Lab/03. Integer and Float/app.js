function solve(a, b, c){
    let sum = a + b+ c;
    console.log(`${sum} - ${(sum % 1 === 0) ? 'Integer' : 'Float'}`);
}

solve(9, 100, 1.1);
solve(100, 200, 303);