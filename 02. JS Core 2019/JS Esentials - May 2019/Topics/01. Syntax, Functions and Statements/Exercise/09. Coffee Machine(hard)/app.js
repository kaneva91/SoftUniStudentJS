function solve(input) {

    let income = 0;

    for (i = 0; i < input.length; i += 1) {
        let line = input[i].split(', '),
            inserterMoney = Number(line[0]),
            calcMoney = 0,
            drink = '';

        if (line[1] === 'coffee') {
            drink = 'coffee';

            if (line[2] === 'caffeine') {
                calcMoney = 0.8;
            }
            else if (line[2] === 'decaf') {
                calcMoney = 0.9;
            }
        }

        else if (line[1] === 'tea') {
            drink = 'tea';
            calcMoney = 0.8;
        }


        if(line.includes('milk')){
            //let milk = calcMoney * 0.1;
            calcMoney  += Math.round( (calcMoney * 0.1) * 10 ) / 10;
           // console.log(milk);
            //console.log(rounded);
        }

        if(line[line.length - 1] !== '0'){
            calcMoney += 0.1;
        }


        if(calcMoney <= inserterMoney){
            console.log(`You ordered ${drink}. Price: $${calcMoney.toFixed(2)} Change: $${(inserterMoney-calcMoney).toFixed(2)}`);
            income += calcMoney;
        }
        else{
            console.log(`Not enough money for ${drink}. Need $${(calcMoney - inserterMoney).toFixed(2)} more.`);
        }

    }
    console.log(`Income Report: $${income.toFixed(2)}`);

}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);