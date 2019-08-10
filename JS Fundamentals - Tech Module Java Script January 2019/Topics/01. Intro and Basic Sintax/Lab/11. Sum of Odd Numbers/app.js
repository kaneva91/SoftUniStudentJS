function solve(n){
    let sum = 0,
        number = 1;
    for (let i = 1; i <= n; i+= 1) {
            console.log(number);
            sum += number;
            number += 2;
    }
    console.log(`Sum: ${sum}`);
}    

solve(5);
solve(3);