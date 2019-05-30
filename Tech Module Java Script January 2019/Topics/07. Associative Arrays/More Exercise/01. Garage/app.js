function solve(input) {
    let garages = new Map();
    let regex = /:/gi;

    for (let line of input) {
        let [garage, car] = line.split(' - ');
        garage = Number(garage);
        car = car.replace(regex, ' -');

        if (garages.has(garage)) {
            let currprops = garages.get(garage);
            currprops.push(car);
            garages.set(garage, currprops);
        }
        else {
            let props = [];
            props.push(car);
            garages.set(garage, props);
        }
    }
    let result = [...garages.entries()].sort((a, b) => a[0] > b[0]);
    
    for (let line of result) {
        let [garage, car] = line;
        console.log(`Garage № ${garage}`);
        car.map(c => console.log(`--- ${c}`))
    }
}

solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
