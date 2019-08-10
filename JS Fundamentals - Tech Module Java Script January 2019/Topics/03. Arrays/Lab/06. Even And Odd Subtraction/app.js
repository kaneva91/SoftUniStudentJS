function solve(arr){
    let evenSum = 0,
    oddSum = 0;

    for(let i = 0; i < arr.length; i += 1){
        if(Number(arr[i]) % 2 === 0){
            evenSum += Number(arr[i]);
        }
        else{
            oddSum += Number(arr[i]);
        }
    }
    console.log(evenSum - oddSum);

}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);