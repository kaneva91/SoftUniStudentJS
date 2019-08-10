function solve(arr) {
    let record = {};

    for (let line of arr) {
        let [company, employee] = line.split(' -> ');

        if (record.hasOwnProperty(company)) {
            let setEmployee = record[company];
            setEmployee.add(employee);
            record[company] = setEmployee;
        }
        else {
            let setEmployee = new Set();
            setEmployee.add(employee);
            record[company] = setEmployee;
        }
    }

    record = [...Object.entries(record)].sort((a, b) => a[0] > b[0]);

    for (let company of record) {
        console.log(company[0]);
        let employees = [...company[1].values()];
        for (const employee of employees) {
            console.log(`-- ${employee}`);
        }
    }
}

solve(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

solve(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
);