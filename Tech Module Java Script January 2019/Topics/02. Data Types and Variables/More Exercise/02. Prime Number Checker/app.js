function solve(number){
    let isPrime = true;
    if(number !== 1){
        for(let i = 2; i <= Math.sqrt(number); i+= 1){
            if(number % i === 0){
                isPrime = false;
                break;
            }
        }
    }       
        console.log(isPrime);
}

solve(7);
solve(8);
solve(81);