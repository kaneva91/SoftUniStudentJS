function solve(arr){
    arr  = arr.map(x => Number(x));
    console.log(arr[0] + arr[arr.length - 1]);
}

solve(['20', '30', '40']);
