function solve(commands) {
    let i,
        numbres = commands.shift().split(' '),
        temp,
        index;

    for (i = 0; i < commands.length; i += 1) {
        temp = commands[i].split(' ');
        switch (temp[0]) {
            case 'Add':
                numbres.push(temp[1]);
                break;

            case 'Remove':
                numbres = numbres.filter(x => x !== temp[1]);
                break;

            case 'RemoveAt':
                index = Number(temp[1]);
                numbres.splice(index, 1);
                break;

            case 'Insert':
                index = Number(temp[2]);
                numbres.splice(index, 0, temp[1]);
                break;
        }
    }
    console.log(numbres.join(' '));
}

solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);