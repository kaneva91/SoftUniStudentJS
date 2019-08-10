function solve(arr) {
    let schoolGades = new Map();
    for (let line of arr) {
        let [name, ...grades] = line.split(' ');

        if (schoolGades.has(name)) {
            let currGrades = schoolGades.get(name);
            currGrades.push(...grades.map(grade => Number(grade)));
            schoolGades.set(name, currGrades);
        }
        else {
            schoolGades.set(name, grades.map(grade => Number(grade)));
        }
    }
    let avg = grades => grades.reduce((a, b) => a + b) / grades.length;
    [...schoolGades.entries()]
        .sort((a, b) => avg(a[1]) - avg(b[1])).
        forEach((x => console.log(`${x[0]}: ${x[1].join(', ')}`)));

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);