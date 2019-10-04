function solve(m, n) {

    let smallest = Math.abs(Math.min(m, n));
    let gcd = 0;

    for (i = 1; i <= smallest; i += 1) {
        if ((m % i === 0) && (n % i === 0)) {
            gcd = i
        }
    }
    console.log(gcd);
}

solve(15, 5);
solve(2154, 458);