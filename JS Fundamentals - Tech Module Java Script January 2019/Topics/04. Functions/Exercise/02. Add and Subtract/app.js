function solve(firstNum, secondNum, thirdNum) {
    let add = (a, b) => a + b,
        result = add(firstNum, secondNum) - thirdNum;
    console.log(result);

}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);