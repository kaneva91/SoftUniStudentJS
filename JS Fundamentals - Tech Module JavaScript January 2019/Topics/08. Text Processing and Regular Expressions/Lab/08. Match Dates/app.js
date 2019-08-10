function solve(input) {
    let text = input,
        pattern = /(?<day>\d{2})([./-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g,
        result = [];
    let match = '';

    while (match = pattern.exec(text)) {
        result.push(match)
    }

    for (let date of result) {
        console.log(`Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`);
    }
}

solve('13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016');