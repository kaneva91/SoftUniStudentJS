function solve(arr) {
    let i,
        invitation,
        guestList = [],
        index;

    for (i = 0; i < arr.length; i += 1) {
        invitation = arr[i].split(' ');
        index = guestList.indexOf(invitation[0]);

        if (invitation[2] === 'not') {

            if (index === -1) {
                console.log(`${invitation[0]} is not in the list!`);
            }
            else {
                guestList.splice(index, 1);
            }
        }
        else {
            if (index === -1) {
                guestList.push(invitation[0]);
            }
            else {
                console.log(`${invitation[0]} is already in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);

solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);