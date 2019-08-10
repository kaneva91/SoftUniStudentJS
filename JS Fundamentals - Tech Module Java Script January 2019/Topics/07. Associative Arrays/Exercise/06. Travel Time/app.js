function solve(arr) {
    let record = {};

    for (let line of arr) {
        let [country, town, price] = line.split(' > ');
        if (!record.hasOwnProperty(country)) {
            let propValue = {}
            propValue[town] = price;
            record[country] = propValue;
        }
        else {
            let towns = record[country];

            if (!towns.hasOwnProperty(town)) {
                towns[town] = price;
                record[country] = towns;
            }
            let currPrice = towns[town];
            if (currPrice > price) {
                towns[town] = price;
            }
        }
    }

    result = [...Object.entries(record)].sort((a, b) => a[0] > b[0]);
    for (let line of result) {
        let printLine = `${line[0]} -> `;
        let townsAndPrices = [...Object.entries(line[1])];

        for (let townAndPrice of townsAndPrices) {
            printLine += `${townAndPrice[0]} -> ${townAndPrice[1]} `;
        }
        console.log(printLine);
    }

}

solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);