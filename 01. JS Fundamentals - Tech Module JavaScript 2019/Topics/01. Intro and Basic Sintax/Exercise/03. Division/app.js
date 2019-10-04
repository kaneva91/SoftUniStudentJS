function solve(number){
   
    let divisibleBy2,
        divisibleBy3,
        divisibleBy6,
        divisibleBy7,
        divisibleBy10;

    function divisible(n,divisibleBy){
        if(n % divisibleBy === 0){
            return 1;
        }
    }
    divisibleBy2 = divisible(number, 2);
    divisibleBy3 = divisible(number, 3);
    divisibleBy6 = divisible(number, 6);
    divisibleBy7 = divisible(number, 7);
    divisibleBy10 = divisible(number, 10);

    if(divisibleBy10 === 1){
        console.log('The number is divisible by 10');
    }
    else if(divisibleBy7 === 1){
        console.log('The number is divisible by 7');
    }
    else if(divisibleBy6 === 1){
        console.log('The number is divisible by 6');
    }
    else if(divisibleBy3 === 1){
        console.log('The number is divisible by 3');
    }
    else if(divisibleBy2 === 1){
        console.log('The number is divisible by 2');
    }
    else{
        console.log("Not divisible");
    }
}

solve(30);
solve(15);
solve(12);
solve(1643);
