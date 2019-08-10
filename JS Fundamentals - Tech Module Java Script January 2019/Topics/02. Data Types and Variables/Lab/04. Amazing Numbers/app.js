function solve(num){
    let sum = 0;
    num = num.toString();
    for (index in num) {
        sum += num[index] * 1; // Multiplied with 1 converts string to number
    }
    console.log(sum.toString().includes('9') ? `${num} Amazing? True` : `${num} Amazing? False`);
}

solve(1233);
solve(999);