function solve(n, m) {
    let start = Number(n),
        end = Number(m),
        result = 0;

    for (i = start; i <= end; i += 1) {
        result += i;
    }

    console.log(result);
}

solve('1', '5');
solve('-8', '20');