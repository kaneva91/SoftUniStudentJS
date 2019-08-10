function solve(arr){
    let i,
        temp,
        rotations = arr.pop();
    if(isNaN(rotations)){ //if use Number() insted of isNAN() - 85/100
        console.log('Empty');
    }
    else{
       for(i = 1; i <= rotations; i += 1){
        temp = arr.pop();
        arr.unshift(temp);
       }
       console.log(arr.join(' '));
    }
}
solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
solve(['remove', 'remove', 'remove']);