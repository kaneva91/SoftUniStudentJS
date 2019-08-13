function solve(input) {
    let obj = {};

    for (i = 0; i < input.length; i += 2) {
        let key = input[i],
            value = Number(input[i + 1])
        obj[key] = value;
    }

    console.log(obj);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);