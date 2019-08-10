function solve(firstInput, secondInput){
    let i,
    outputArray = [];
    for (i = 0; i < firstInput.length; i+= 1) {
        if(i % 2 === 0){
            outputArray.push(Number(firstInput[i]) + Number(secondInput[i]));
        }
        else{
            outputArray.push(firstInput[i] + secondInput[i]);
        }
    }
    console.log(outputArray.join(" - "));
}

solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
solve(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);