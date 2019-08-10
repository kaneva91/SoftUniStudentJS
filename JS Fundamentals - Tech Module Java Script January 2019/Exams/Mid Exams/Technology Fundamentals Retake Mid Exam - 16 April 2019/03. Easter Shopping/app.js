function solve(arr) {
    let shops = arr.shift().split(' ');
    commands = Number(arr.shift());

    for (i = 0; i < commands; i += 1) {
        let line = arr[i].split(' ');

        if (line[0].includes("Include")) {
            shops.push(line[1]);
        }

        else if (line[0].includes("Visit")) {

            let n = Number(line[2]);

            if (n <= shops.length) {
                if (line[1] === 'first') {
                    while (n !== 0) {
                        shops.shift();
                        n -= 1;
                    }
                }
                else if (line[1] === 'last') {
                    while (n !== 0) {
                        shops.pop();
                        n -= 1;
                    }
                }
            }

        }

        else if (line[0].includes("Prefer")) {
            let indexOne = Number(line[1]);
            let indexTwo = Number(line[2]);

            if((indexOne >= 0 && indexOne < shops.length) && (indexTwo >= 0 && indexTwo < shops.length)){
                let shopOne = shops[indexOne];
                let shopTwo = shops[indexTwo];

                shops.splice(indexOne, 1, shopTwo);
                shops.splice(indexTwo, 1, shopOne);
            }

           
        }

        else if (line[0].includes("Place")) {
            let shop = line[1];
            let index = Number(line[2]);

            if(index >= 0 && index < shops.length){
                shops.splice(index + 1, 0, shop);
            }
           
        }
    }
    console.log('Shops left:');
    console.log(shops.join(' '));
}
solve(['Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2']
)

solve([ 'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
'6',
'Visit first 9',
'Visit last 4',
'Prefer 3 8',
'Prefer 0 1',
'Place Store 7',
'Place ShoeAquarium 2' ])