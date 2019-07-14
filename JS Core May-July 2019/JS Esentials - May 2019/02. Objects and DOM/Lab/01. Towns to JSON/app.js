function solve(arr) {
    let input = arr.slice();

    output = [];
    input.shift();

    for (i = 0; i < input.length; i += 1) {
        let obj = {},
        line = input[i].split('|').map( x=> x.trim()).filter(x => x !== '');
        
        obj['Town'] = line[0];
        obj['Latitude'] = Number(line[1]);
        obj['Longitude'] = Number(line[2]);

        output.push(JSON.stringify(obj));
    }
    console.log(`[${output.join(',')}]`);
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])
