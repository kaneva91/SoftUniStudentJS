function solve(input) {
    let obj = {};

    for (i = 0; i < input.length; i += 2) {
        if (!obj.hasOwnProperty(input[i])) {
            obj[input[i]] = Number(input[i + 1]);
        }
        else {
            let prop = obj[input[i]];
            prop += Number(input[i + 1]);
            obj[input[i]] = prop;
        }
    }
    console.log(JSON.stringify(obj));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);