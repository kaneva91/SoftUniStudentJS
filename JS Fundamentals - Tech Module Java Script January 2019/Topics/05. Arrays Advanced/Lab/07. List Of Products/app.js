function solve(products) {
    products.sort((a, b) => a > b).
        map((e, i) => console.log(`${i + 1}.${e}`));
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);