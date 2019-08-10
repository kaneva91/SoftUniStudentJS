function solve(input) {
    input.forEach(person => {
        console.log(`Name: ${person} -- Personal Number: ${person.length}`);
    });
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);