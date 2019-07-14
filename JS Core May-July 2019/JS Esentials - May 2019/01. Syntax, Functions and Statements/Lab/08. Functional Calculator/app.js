function solve(operand1, operand2, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        case '%':
            result = operand1 % operand2;
            break;
        case '**':
            result = operand1 ** operand2;
            break;
    }

    console.log(result);
}

solve(2, 4, '+');
solve(3, 3, '/');
solve(18, -1, '*');