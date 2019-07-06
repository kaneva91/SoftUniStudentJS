function solve(input){

    input.forEach(line => {
        let [town, latitude, longitude] = line.split(' | ');
            latitude = Number(latitude).toFixed(2);
            longitude = Number(longitude).toFixed(2);

            console.log(`{ town: '${town}', latitude: '${latitude}', longitude: '${longitude}' }`);
    });
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);