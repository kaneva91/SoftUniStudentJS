function solve(firstNum, secondNum, thirdNum) {
    let result = smallestOfThree(firstNum, secondNum, thirdNum);

    console.log(result);

    function smallestOfThree(first, second, third) {
        return Math.min(first, second, third);
    }
}

solve(2, 5, 3);
solve(600, 342, 123);
solve(25, 21, 4);