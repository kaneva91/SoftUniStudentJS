function solve(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    },
        json = JSON.stringify(person);
    console.log(json);
}

solve('George', 'Jones', 'Brown');