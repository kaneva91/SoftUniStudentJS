function solve(arr){
    let i,
        leftSum = 0,
        rightSum = 0,
        indexLeft,
        indexRight,
        result;
    
    if(arr.length === 1){
        console.log(0);
    }
    else{
        for (i = 1; i < arr.length; i+= 1) {
            element = arr[i];
            indexLeft = i - 1;
            indexRight = i + 2;
                 //Sum on the left
            while(indexLeft >= 0){
                leftSum += arr[indexLeft]
                indexLeft -= 1;
            }
                 //Sum on the rigth
            while (indexRight <= arr.length) {
                rightSum += arr[indexRight - 1];
                indexRight += 1;
            }

            if(leftSum === rightSum){
                result = i;
                break;
            }
            leftSum = rightSum = 0;
        }
        console.log(result === undefined ? 'no' : result);
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);