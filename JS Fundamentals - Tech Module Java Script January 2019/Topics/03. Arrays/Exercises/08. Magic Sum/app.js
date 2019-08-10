function solve(input) {
    let i, j,
        arr = input[0].split(' '),
        magicSum = Number(input[1]);
    for (i = 0; i < arr.length - 1; i += 1) {
        for (j = i + 1; j < arr.length; j+= 1) {
            if((Number(arr[i]) + Number(arr[j])) === magicSum){
                console.log(`${arr[i]} ${arr[j]}`); 
            }
        }
    }
}

solve(['1 7 6 2 19 23', '8']);
solve(['14 20 60 13 7 19 8', '27']);
solve(['1 2 3 4 5 6', '6']);