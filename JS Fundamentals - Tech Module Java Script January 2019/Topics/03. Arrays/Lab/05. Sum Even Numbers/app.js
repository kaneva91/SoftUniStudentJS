function solve(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i += 1){
        if(parseInt(arr[i]) % 2 === 0){
            sum += parseInt(arr[i]);
        }
    }
    console.log(sum);
}

solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);