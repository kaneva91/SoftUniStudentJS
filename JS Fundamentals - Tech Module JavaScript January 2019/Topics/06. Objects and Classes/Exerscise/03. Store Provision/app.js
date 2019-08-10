function solve(currentProducts, ordered) {
    let storage = {};

    for (let i = 0; i < currentProducts.length; i += 2) {
        let product = currentProducts[i],
            quantity = Number(currentProducts[i + 1]);

        storage[product] = quantity;
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let product = ordered[i],
            quantity = Number(ordered[i + 1]);

        if (storage.hasOwnProperty(product)) {
            storage[product] += quantity;
        }
        else {
            storage[product] = quantity;
        }
    }

    Object.entries(storage).forEach(pair => {
        let [product, quantity] = pair;
        console.log(`${product} -> ${quantity}`);

    });
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);