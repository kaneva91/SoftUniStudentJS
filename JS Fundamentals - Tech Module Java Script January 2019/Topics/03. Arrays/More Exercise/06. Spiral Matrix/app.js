function solve(rows, cols) {

    let row = 0,
        col = -1;
    direction = 'right',
        maxRotations = rows * cols,

        matrix = new Array(rows).fill(0);
    for (let i = 0; i < rows; i += 1) {
        matrix[i] = new Array(cols).fill(0);
    }

    for (let i = 0; i < maxRotations; i += 1) {
        if (direction === 'right') {
            col += 1;
            matrix[row][col] = i + 1;

            if (col === cols - 1) { //col = 4; cols = 5
                direction = 'down';
            
               
            }
            //console.log(matrix);
        }

        else if (direction === 'down') {
            row += 1;
            matrix[row][col] = i + 1;

            if (row === rows - 1) {
                direction = 'left'
               
            }

        }

        else if (direction === 'left') {
            col -= 1;
            matrix[row][col] = i + 1;

            if(col === 0){
                direction = 'up';
                // decrease cols here
            }
        }

        else if (direction === 'up') {
            row -= 1;
            matrix[row][col] = i + 1;
            if(row ===  1){
                
                break;
                direction = 'right';
                rows -= 1;
            }
        }
    }
    console.log(matrix);
}

solve(4, 5);