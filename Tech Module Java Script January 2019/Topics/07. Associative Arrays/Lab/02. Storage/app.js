function solve(arr) {
    let storage = new Map();
    for (let string of arr) {
        let [product, quantity] = string.split(' ');

        if (storage.has(product)) {
            storage.set(product, storage.get(product) + Number(quantity));
        }
        else {
            storage.set(product, Number(quantity));

        }
    }

    for ([product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);