function solve(input){
    let result = oddAndEvenSum(input);

    function oddAndEvenSum(number){
        let lastDigit,
        sumOdd = 0,
        sumEven = 0;
        while (number > 0) {
            lastDigit = number % 10;

            if(lastDigit % 2 === 0){
                sumEven += lastDigit;
            }
            else{
                sumOdd += lastDigit;
            }

            number = Math.floor(number / 10);
        }
        console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    }
}

solve(1000435);
solve(3495892137259234);