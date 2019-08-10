function solve(arr) {
    let pattern = /\b\d{2}-[A-Z][a-z]{2}-\d{4}\b/g,
        dates = [];

    for (let line of arr) {
        let date = line;

        while (date = pattern.exec(line)) {
            date = date[0].replace('-', ' ').replace('-', ' ');
            dates.push(date);
        }
    }
    dates.map(date => console.log(date));
}

solve(['I am born on 28-Feb-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']);