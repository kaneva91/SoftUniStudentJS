function solve(a, b, c) {
    console.log(resultCheck(a, b, c));

    function resultCheck(a, b, c) {
        if (a === 0 || b === 0 || c === 0) {
            return 'Positive';
        }
        else if (a > 0 && b > 0 && c > 0) {
            return 'Positive';
        }
        else if (a > 0 && b > 0 && c < 0) {
            return 'Negative';
        }
        else if (a > 0 && b < 0 && c > 0) {
            return 'Negative';
        }
        else if (a > 0 && b < 0 && c < 0) {
            return 'Positive';
        }
        else if (a < 0 && b > 0 && c > 0) {
            return 'Negative';
        }
        else if (a < 0 && b > 0 && c < 0) {
            return 'Positive';
        }
        else if (a < 0 && b < 0 && c > 0) {
            return 'Positive';
        }
        else if (a < 0 && b < 0 && c < 0) {
            return 'Negative';
        }
    }
}
solve(5, 12, -15);
solve(-6, -12, 14)
solve(-1, 2, -3);
solve(-1, 0, 1);
