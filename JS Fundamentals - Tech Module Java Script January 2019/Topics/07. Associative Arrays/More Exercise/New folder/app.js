function solve(input) {
    let storage = {};

    for (let line of input) {
        if(line.includes('arrives')){
            let leader = line.replace(/ arrives/gi, '');
            storage[leader] = {};
        }
        else if(line.includes(':')){
            let [leader, armyAndCount] = line.split(': ');

            if(storage.hasOwnProperty(leader)){
                let [army, count] = armyAndCount.split(', ')
                let property = storage[leader];
                property[army] = Number(count);
                storage[leader] = property;
            }
        }
        else if(line.includes('+')){
            let [army, count] = line.split(' + ');

            for (leader in storage) {
                if(storage[leader][army] != undefined){
                    storage[leader][army] += Number(count);
                }
            }
        }
        else if(line.includes('defeated')){
            let leader = line.replace(/ defeated/gi, '');
            delete storage[leader]
        }
    }
    console.log(storage);
}

solve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);