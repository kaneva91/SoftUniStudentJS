function solve(input) {
    let storage = {};

    for (let i = 0; i < input.length; i += 2) {
        let resourse = input[i];
        let quantity = Number(input[i + 1]);

        if (storage.hasOwnProperty(resourse)) {
            let currQuantity = storage[resourse] + quantity;
            storage[resourse] = currQuantity;
        }
        else {
            storage[resourse] = quantity;
        }

    }
    [...Object.entries(storage)].map(x => console.log(`${x[0]} -> ${x[1]}`));
}

solve(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

solve(['gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);