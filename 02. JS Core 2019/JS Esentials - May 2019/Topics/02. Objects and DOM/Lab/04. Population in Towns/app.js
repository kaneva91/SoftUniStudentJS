function solve(input) {
    let output = {};

    for (i = 0; i < input.length; i += 1) {
        let [city, polulation] = input[i].split(' <-> ');

        if (!output.hasOwnProperty(city)) {
            output[city] = Number(polulation);
        }
        else {
            output[city] += Number(polulation);
        }
    }

    for (const key in output) {
        console.log(`${key} : ${output[key]}`);
    }

}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);