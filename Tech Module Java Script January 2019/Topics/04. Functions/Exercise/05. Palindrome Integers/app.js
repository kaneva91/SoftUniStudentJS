function solve(arrNums) {
    let i;

    for (i = 0; i < arrNums.length; i += 1) {
        console.log(isPalindrome(arrNums[i]));
    }

    function isPalindrome(number) {
        let i;

        number = number.toString().split('');

        for (i = 0; i < number.length / 2; i += 1) {
            if (number[i] !== number[number.length - i - 1]) {
                return false;
            }
        }
        return true;
    }
}

solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);