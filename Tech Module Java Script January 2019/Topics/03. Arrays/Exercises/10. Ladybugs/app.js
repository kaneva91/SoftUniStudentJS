function solve(input) {
    let i,
        field = new Array(input[0]).fill(0),   
        bugsPositions = input[1].split(' '),
        currPosition,
        command,
        index,
        direction,
        move;
    for (i = 0; i < bugsPositions.length; i += 1) {
        currPosition = Number(bugsPositions[i]);
        if(currPosition >=0 && currPosition < field.length){
            field[currPosition] = 1;
        }   
    }

    for (i = 2; i < input.length; i += 1) {
        command = input[i].split(' ');
        index = Number(command[0]);
        direction = command[1];
        move = Number(command[2]);

        if (field[index] === 1) {
            field[index] = 0;
            while (index >= 0 && index < field.length) {
                if (direction === 'right') {
                    index += move;
                }
                else if (direction === 'left') {
                    index -= move;
                }
                if (field[index] === 0) {
                    field[index] = 1;
                    break;
                }
            }
        }
    }
    console.log(field.join(' '));
}
solve([3, '0 1', '0 right 1', '2 right 1']);
solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
solve([5, '3', '3 left 2', '1 left -2']);