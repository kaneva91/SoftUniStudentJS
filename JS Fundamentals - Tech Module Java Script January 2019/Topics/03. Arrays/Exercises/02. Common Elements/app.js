function solve(firstInput, secondInput){
    let i, j;
    for (i = 0; i < firstInput.length; i+= 1) {
        if(secondInput.includes(firstInput[i])){
            console.log(firstInput[i]);
        }
    }
}

solve(["Hey", "hello", 2, 4, "Pesho", "e"], ["Pecho", 10, "hey", 4, "hello", "2"]);
solve(["S", "o", "f", "t", "U", "n", "i", " "],["s", "o", "c", "i", "a", "l"]);