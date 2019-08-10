function solve(param) {
    let input = param,
        isPalindrome = true;
    result = [];

    for (let line of input) {
        line = line.split(' ').join('');

        for (i = 0; i < line.length / 2; i += 1) {
            if (line[i] != line[line.length - i - 1]) {
                isPalindrome = false;
                break;
            }

        }
        if (isPalindrome) {
            result.push(line);
        }

    }
    console.log((result.length === 0) ? 'No palindromes found' : result.join(', '));
}

solve([' stella won no wallets', 'not a palindrome']);
solve(['stella won wallets', 'not a palindrome']);