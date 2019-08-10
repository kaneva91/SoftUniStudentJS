function solve(input) {
    let dictionary = {};

    input = input.map(X => JSON.parse(X));

    input.forEach(pair => {
        let [word, definishion] = Object.entries(pair)[0];
        dictionary[word] = definishion;
    });

    let result = Object.entries(dictionary).sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    });

    result.forEach(element => {
        console.log(`Term: ${element[0]} => Definition: ${element[1]}`);
    });
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);