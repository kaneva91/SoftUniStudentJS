function solve(arr){
    let i, j,
        temp,
        tem2;
        result = [],
        isMaxNumber = true;
    for (i = 0; i < arr.length - 1; i+= 1) {
        temp = arr[i];
        for (j = i + 1; j < arr.length; j+= 1) {
            tem2 = arr[j];
            if(temp <= tem2){
                isMaxNumber = false;
                break;
            }
        }
        if(isMaxNumber){
            result.push(temp);
        }
        else{
            isMaxNumber = true;
        }
    }
    result.push(arr[arr.length -1]);
    console.log(result.join(' '));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);