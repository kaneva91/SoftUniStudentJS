function solve(arr){
    let i,
        counter = 1,
        output = [];
    for(i = 0; i < arr.length; i += 1){
        if(arr[i] === 'add'){
            output.push(counter);
            counter += 1;
        }
        else if(arr[i] === 'remove'){
            output.pop();
            counter += 1;
        }
    }
    console.log((output.length === 0) ? 'Empty' : output.join(' '));
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);