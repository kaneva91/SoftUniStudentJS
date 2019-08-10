function solve(input) {
    let catalogue = {};

    input.forEach(element => {
        let [name, price] = element.split(' : '),
            firstLetter = name.slice(0, 1);

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = [[name, price]];
        }
        else {
            let currContent = catalogue[firstLetter];
            currContent.push([name, price]);
            catalogue[firstLetter] = currContent;
        }
    });

    Object.entries(catalogue)
        .sort((a, b) => sortAlphabetically(a, b))
        .forEach(element => {
            let [letter, arrayOfProducts] = element;
            console.log(letter);

            arrayOfProducts = arrayOfProducts.map((a =>{ //sort them
                console.log(a[0]);
            }));

                arrayOfProducts.forEach(pair => {
                    let [product, price] = pair;
                    console.log(`${product} : ${price}`)
                });
        });

    function sortAlphabetically(a, b) {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    }
}

solve(['Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])