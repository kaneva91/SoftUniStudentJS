function solve(arr){
    let output = '',
    step = Number(arr[arr.length - 1]);
    for(let i = 0; i < arr.length - 1; i += step){
        output += arr[i] + ' ';
    }
    console.log(output);
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);