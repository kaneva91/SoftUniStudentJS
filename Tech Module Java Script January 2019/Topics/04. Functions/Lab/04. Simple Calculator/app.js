function solve(a, b, operator) {
    console.log(calculator(a, b, operator));

    function calculator(a, b, operator) {
        let result = 0;
        switch (operator) {
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                result = a / b;
                break;
            case 'add':
                result = a + b;
                break;
            case 'subtract':
                result = a - b;
                break;
        }
        return result;
    }
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(50, 13, 'subtract');