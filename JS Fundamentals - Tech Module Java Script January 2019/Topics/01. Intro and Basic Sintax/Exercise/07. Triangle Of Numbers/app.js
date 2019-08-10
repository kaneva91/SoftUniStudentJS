function solve(n){
    let line = "";
    for(let i = 1; i <= n; i += 1){     
        for (j = 0; j < i; j += 1){
            line += (i + ' ');
        }
        console.log(line);
        line = "";
    }
}
solve(3);
solve(5);
solve(6);
