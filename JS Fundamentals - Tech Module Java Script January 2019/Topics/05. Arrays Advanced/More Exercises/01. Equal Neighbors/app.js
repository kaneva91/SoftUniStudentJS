function solve(matrix) {
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];

        for (let j = 0; j < row.length; j++) {
            if (j < row.length - 1) {

                if (row[j] === row[j + 1]) {
                    counter++;
                }
            }

            if (i < matrix.length - 1) {
                let x = row[j],
                    y = matrix[i + 1][j];
                if (x === y) {
                    counter++
                }
            }
        }
    }
    console.log(counter);
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

solve(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
    ]); 
