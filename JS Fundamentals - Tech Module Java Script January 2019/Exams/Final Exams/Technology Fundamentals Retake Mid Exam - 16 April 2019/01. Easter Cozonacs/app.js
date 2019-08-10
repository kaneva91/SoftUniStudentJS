function solve(arr){
    let budget = Number(arr[0]);
    let flourPrice = Number(arr[1]);
    let egsPrice = flourPrice * 0.75;
    let milkPrice = (flourPrice * 1.25) * 0.25;
    let cozonacs = 0;
    let egs = 0;
    let counter = 0;


    while(true){
        let recipe = flourPrice + egsPrice + milkPrice;

       if((budget - recipe) >= 0){

        budget -= recipe;
        cozonacs += 1;
        egs += 3;
        counter += 1;

        if(counter === 3){

            let eggLoss = cozonacs - 2;
            egs -= eggLoss;
            counter = 0;
        }
       }
       else{
           break;
       }
    }

       console.log(`You made ${cozonacs} cozonacs! Now you have ${egs} eggs and ${budget.toFixed(2)}BGN left.`);
}

solve([ '20.50', '1.25' ]);
solve([ '15.75', '1.4' ]);