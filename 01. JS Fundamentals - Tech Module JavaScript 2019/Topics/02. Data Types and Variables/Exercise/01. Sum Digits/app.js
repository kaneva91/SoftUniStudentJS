function solve(value){
    let sum = 0;
    while(value > 0){
        sum += (value % 10);
        value = Math.floor(value / 10);
    }
    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);