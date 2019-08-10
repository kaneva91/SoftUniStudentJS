function solve(arr) {
    let record = new Set();

    for (const line of arr) {
        let [direction, carNumber] = line.split(', ');
        if (direction === 'IN') {
            record.add(carNumber);
        }
        else if (direction === 'OUT') {
            record.delete(carNumber);
        }
    }
    record = [...record.keys()];

    if (record.length === 0) {
        console.log('Parking Lot is Empty');
    }
    else {
        record.sort((a, b) => a > b).
            forEach(X => console.log(X));
    }

}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);