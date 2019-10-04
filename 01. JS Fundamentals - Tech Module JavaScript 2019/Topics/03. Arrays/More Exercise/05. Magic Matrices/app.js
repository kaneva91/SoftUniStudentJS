function solve(input){
    let i, j,
        sum = 0,
        tempArr = [],
        sumArr = [],
        areEqualSums = true;
    for(i = 0; i < input.length; i += 1){ // sum rows and push results in sumarr array
        tempArr = input[i].slice();
            for (index in tempArr){
                sum += tempArr[index];
            }
            sumArr.push(sum);
            sum = 0;
        }
       
       for(j = 0; j < input[0].length; j += 1){  // sum cols and push results in sumarr array
        for(i = 0; i < input.length; i += 1){
            sum += input[i][j];
        }
        sumArr.push(sum);
            sum = 0;
    }

    for(i = 0; i < sumArr.length - 1; i += 1){ //check if all sums are equal
        if(sumArr[i] !== sumArr[i + 1]){
            areEqualSums = false;
            break;
        }
    }
    console.log(areEqualSums ? true : false); //print the message
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );