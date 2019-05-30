function solve(firstNum, secondNum) {
    let firstNumFactorial = factorial(firstNum),
        secondNumFactorial = factorial(secondNum),
        result = (firstNumFactorial / secondNumFactorial).toFixed(2);


    console.log(result);

    function factorial(num) {
        if (num === 1) {
            return 1;
        }
        else {
            return num * factorial(num - 1);
        }
    }
}

solve(5, 2);
solve(6, 2);