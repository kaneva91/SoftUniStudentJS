function solve(input) {
    let i, j,
        train = input.shift().split(' ').map(x => Number(x)),
        capacity = Number(input.shift()),
        passangers = input.slice(),
        temp;

    for (i = 0; i < passangers.length; i += 1) {
        temp = passangers[i].split(' ');
        if (temp[0] === 'Add') {
            train.push(Number(temp[1]));
        }
        else {
            for (j = 0; j < train.length; j += 1) {
                if (train[j] + Number(temp[0]) <= capacity) {
                    train[j] += Number(temp[0]);
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}

solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
solve(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
