function solve(input) {
    let result = numberModification(input);
    console.log(result);

    function numberModification(input) {
        let number = input.toString().split('').map(x => Number(x)),
            avgSum = number.reduce((a, b) => a + b) / number.length;

        if (avgSum < 5) {
            while (avgSum < 5) {
                number.push(9);
                avgSum = number.reduce((a, b) => a + b) / number.length;
            }
        }
        return number.join('');
    }
}

solve(101);
solve(5835);