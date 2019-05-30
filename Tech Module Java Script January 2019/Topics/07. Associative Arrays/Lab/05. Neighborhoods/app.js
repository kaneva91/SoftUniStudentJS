function solve(arr) {
    let neighborhoods = arr.shift().split(', ');
    let record = new Map();

    for (const neighborhood of neighborhoods) {
        record.set(neighborhood, []);
    }

    for (let line of arr) {
        let [neighborhood, person] = line.split(' - ');

        if (record.has(neighborhood)) {
            let neighbours = record.get(neighborhood);
            neighbours.push(person);
            record.set(neighborhood, neighbours);
        }
    }

    function personPrint(persons) {
        for (let index in persons) {
            console.log(`--${persons[index]}`);
        }
    }
    record = [...record.entries()].
        sort((a, b) => b[1].length - a[1].length);

    for (let [neighborhood, people] of record) {
        console.log(`${neighborhood}: ${people.length}`);

        for (let person of people) {
            console.log(`--${person}`);
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);