function solve(input) {
    let result = carWash(input);
    console.log(`The car is ${result.toFixed(2)}% clean.`);

    function carWash(commands) {
        let i,
            result = 0;
        for (i = 0; i < commands.length; i += 1) {
            switch (commands[i]) {
                case 'soap':
                    result += 10;
                    break;
                case 'water':
                    result += result * 0.2;
                    break;
                case 'vacuum cleaner':
                    result += result * 0.25;
                    break;
                case 'mud':
                    result -= result * 0.1;
                    break;
            }
        }
        return result;
    }
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);