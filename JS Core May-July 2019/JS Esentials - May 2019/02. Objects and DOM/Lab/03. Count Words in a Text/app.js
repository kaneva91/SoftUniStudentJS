function solve(arr) {
    let result = arr[0].match(/[a-z0-9_]+/gi),
        input = {};

    for (i = 0; i < result.length; i += 1) {

        if (!input.hasOwnProperty(result[i])) {
            input[result[i]] = 1;
        }
        else {
            input[result[i]] += 1;
        }

    }
    console.log(JSON.stringify(input));
}
solve(['Far too slow, you\'re far too slow.']);
solve(['JS devs use Node.js for server-side JS.-- JS for devs']);