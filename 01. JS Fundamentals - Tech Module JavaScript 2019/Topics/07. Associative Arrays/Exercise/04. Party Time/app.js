function solve(guests) {
    let indexParty = guests.indexOf('PARTY');
    let invitationList = guests.splice(0, indexParty);
    guests.shift();

    for (let guest of guests) {
        let index = invitationList.indexOf(guest);
        if (index != -1) {
            invitationList.splice(index, 1);
        }
    }
    console.log(invitationList.length);
    invitationList.filter(g => Number.isInteger(+g[0]))
        .concat(invitationList.filter(g => !Number.isInteger(+g[0])))
        .forEach(x => console.log(x));
}

solve(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY',
    '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'
]);

solve(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I',
    'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK',
    'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi',
    '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'
]);