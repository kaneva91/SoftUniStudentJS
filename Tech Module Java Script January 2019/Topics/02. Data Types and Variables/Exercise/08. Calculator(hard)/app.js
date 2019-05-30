function solve(num1, operator, num2){
    switch(operator){
        case '+': //multiplying number * 1 converts the string to number
            console.log((num1 * 1 + num2 * 1).toFixed(2));
            break;
        case '-':
            console.log((num1 * 1 - num2 * 1).toFixed(2));
            break;
        case '*':
            console.log((num1 * 1 * num2 * 1).toFixed(2));
            break;
        case '/':
            console.log((num1 * 1 / num2 * 1).toFixed(2));
            break;
    }
}

solve('5', '+', '10');