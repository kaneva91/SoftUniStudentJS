function solve(arr1, arr2){
    let sum = 0,
        areIdentical = true;
    for(let i = 0; i < arr1.length; i += 1){
        if(arr1[i] == arr2[i]){
            sum += Number(arr1[i]);
        }
        else{
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if(areIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);