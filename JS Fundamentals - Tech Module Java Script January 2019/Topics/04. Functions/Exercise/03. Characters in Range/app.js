function solve(firstChar, secondChar) {
    let result = charsInRange(firstChar, secondChar);
    console.log(result.join(' '));

    function charsInRange(first, second) {
        let min = first.charCodeAt(0),
            max = second.charCodeAt(0),
            result = [],
            temp;

        if (min > max) {
            temp = min;
            min = max;
            max = temp;
        }

        for (i = min + 1; i < max; i += 1) {
            result.push(String.fromCharCode(i));
        }
        return result;
    }
}

solve('a', 'd');
solve('#', ':');
solve('C', '#');