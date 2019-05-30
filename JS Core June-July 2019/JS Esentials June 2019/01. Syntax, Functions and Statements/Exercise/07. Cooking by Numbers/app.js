function solve(arr) {
    let operations = arr.slice(),
        num = operations.shift();

    for (i = 0; i < operations.length; i += 1) {
        let operation = operations[i];

        switch (operation) {
            case 'chop':
                console.log(num = num / 2);
                break;

            case 'dice':
                console.log(num = Math.sqrt(num));
                break;

            case 'spice':
                console.log(num += 1);
                break;

            case 'bake':
                console.log(num *= 3);
                break;

            case 'fillet':
                console.log(num *= 0.8);
                break;
        }
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);