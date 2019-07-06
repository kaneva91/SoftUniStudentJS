function solution() {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };


    return (params) => {
        let [command, type, quantity] = params.split(' ');

        if (command === 'restock') {
            return restock(Number(quantity));
        }
        else if (command === 'prepare') {
            return prepare(type, quantity);
        }
        else if (command === 'report') {
            return report(ingredients);
        }

        function restock(quantity) {
            ingredients[type] += quantity;
            return 'Success';
        }

        function prepare(type, quantity) {
            let areEnoughIngedients = false,
                neededIngredients = recipes[type];

            for (const key in neededIngredients) {
                neededIngredients[key] *= quantity;

                let needed = neededIngredients[key],
                    stored = ingredients[key];

                if (needed > stored) {
                    areEnoughIngedients = false;
                    return `Error: not enough ${key} in stock`;
                }
                else {
                    areEnoughIngedients = true;
                }
            }

            if (areEnoughIngedients) {
                for (var key in neededIngredients) {
                    let takenIngredients = neededIngredients[key]
                    ingredients[key] -= takenIngredients;
                }
                return 'Success';
            }
            console.log(neededIngredients);
        }


        function report(ingredients) {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate}` +
                ` fat=${ingredients.fat} flavour=${ingredients.flavour}`
        }

    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));
