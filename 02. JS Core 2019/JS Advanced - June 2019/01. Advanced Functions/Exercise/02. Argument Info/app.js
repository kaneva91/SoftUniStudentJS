function solve() {
    let typeCounter = {};

    for (const arg of arguments) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!typeCounter.hasOwnProperty(type)) {
            typeCounter[type] = 1;
        }
        else {
            typeCounter[type] += 1;
        }
    }
    let result = Object.entries(typeCounter)
        .sort((a, b) => b[1] - a[1])
        .forEach(element => {
            let [type, count] = element;
            console.log(`${type} = ${count}`);
        });
}


solve('cat', 42, function () { console.log('Hello world!'); });