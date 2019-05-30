function solve(input){
    let gold = 0,
        counter = 0,
        bitcoins = 0,
        dayOfFirstBitkoin = 0,
        moneyTotal = 0,
        tempBitkoins = 0;
    for(let i = 0; i < input.length; i += 1){
        counter += 1;
        if(counter === 3){
            gold = 0.7 * input[i];
            counter = 0;
        }
        else{
            gold = input[i];
        }
        moneyTotal += gold * 67.51;

        while(moneyTotal >= 11949.16){

            tempBitkoins = Math.floor(moneyTotal /11949.16);
            bitcoins += tempBitkoins;
            moneyTotal -= tempBitkoins * 11949.16;

            if(dayOfFirstBitkoin === 0){
                dayOfFirstBitkoin = i + 1;
            }
        }
        
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(dayOfFirstBitkoin != 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitkoin}`);
    }
    console.log(`Left money: ${moneyTotal.toFixed(2)} lv.`);  
}
solve([100,200,300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);