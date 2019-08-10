function solve(arr){
    let index = 0;
    while (index < arr.length - 1) {
        if(arr[index] > arr[index + 1]){
            arr.splice((index + 1),1);
        }
        else{
            index += 1;
        }
    }
    console.log(arr.join(' '));
}

solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
solve([ 1, 2, 3, 4]);
solve([ 20, 3, 2, 15, 6, 1]);
