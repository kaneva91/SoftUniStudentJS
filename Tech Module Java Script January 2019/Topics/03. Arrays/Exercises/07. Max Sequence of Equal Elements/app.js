function solve(input) {
    let arr = input[0].split(' '),
        i,
        currCount = 1,
        maxCount = 0,
        lastIndex,
        result = [];
    for (i = 1; i < arr.length; i += 1) {
        if (arr[i - 1] === arr[i]) {
            currCount += 1;
            if (currCount > maxCount) {
                maxCount = currCount;
                lastIndex = i;
            }
        }
        else {
            currCount = 1;
        }
    }
    for (i = (lastIndex - maxCount + 1); i <= lastIndex; i += 1) {
        result.push(arr[i]);

    }
    console.log(result.join(' '));
}

solve(['2 1 1 2 3 3 2 2 2 1']);
solve(['1 1 1 2 3 1 3 3']);
solve(['4 4 4 4']);
solve(['0 1 1 5 2 2 6 3 3']);