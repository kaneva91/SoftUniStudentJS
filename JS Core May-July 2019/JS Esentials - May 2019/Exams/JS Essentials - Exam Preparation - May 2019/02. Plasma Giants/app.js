function solve(arr, n) {

    const chunk = (input, len) => {
        let arr = input.slice();
        let chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }

        return chunks;
    }

    const divideInTwo = (input) => {
        let arr = input.slice();
        return [arr.splice(0, arr.length / 2), arr]
    }

    let [firstGiant, secondGiant] = divideInTwo(arr);

    if (n > 0) {
        firstGiant = chunk(firstGiant, n);
        secondGiant = chunk(secondGiant, n);

        firstGiant = firstGiant.map(arr =>
            arr = arr.reduce((a, b) => a * b, 1));

        secondGiant = secondGiant.map(arr =>
            arr = arr.reduce((a, b) => a * b, 1))

    }

    firstGiant = firstGiant.reduce((a, b) => a + b)
    secondGiant = secondGiant.reduce((a, b) => a + b);

    let damage = Math.min(...arr),
        max = Math.max(...arr),
        rounds = 1;

    if (damage > 0) {
        while (true) {
            rounds++;
            firstGiant -= damage;
            secondGiant -= damage;
            if (firstGiant <= max || secondGiant <= max) {
                break;
            }
        }
    }

    if (firstGiant === secondGiant) {
        console.log(`Its a draw ${firstGiant} - ${secondGiant}`);
    }
    else {
        if (firstGiant > secondGiant) {
            console.log(`First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`);
        }
        else {
            console.log(`Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`);
        }
    }
}

solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
solve([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2)