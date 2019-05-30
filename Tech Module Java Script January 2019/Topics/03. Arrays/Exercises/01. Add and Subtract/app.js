function solve(arr){
    let i,
        sumOriginalArray = 0,
        sumModifiedArray = 0;
    for (i = 0; i < arr.length; i+= 1) {
        sumOriginalArray += arr[i];
        if(arr[i] % 2 === 0){
            arr[i] += i;
        }
        else{
            arr[i] -= i;
        }
        sumModifiedArray += arr[i];
    }
    console.log(`[ ${arr.join(', ')} ]`);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);