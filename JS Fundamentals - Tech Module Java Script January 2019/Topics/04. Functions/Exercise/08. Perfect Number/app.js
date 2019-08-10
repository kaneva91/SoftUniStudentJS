function solve(num) {

    console.log(perfectNum(num));

    function perfectNum(n) {
        let i,
            sum = 0;

        for (i = 0; i < n - 1; i += 1) {
            if (n % i === 0) {
                sum += i;
            }
        }

        if (sum === n) {
            return 'We have a perfect number!';
        }
        else {
            return 'It’s not so perfect.';
        }
    }
}

solve(6);
solve(28);
solve(1236498);