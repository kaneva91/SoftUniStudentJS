function solve(binary){
    let decimal = 0,
        power = 0;
    binary = binary.split('').reverse().join('');
    for (let i = 0; i < binary.length; i+= 1) {
        decimal += parseInt(binary[i]) * Math.pow(2, power);
        power += 1;
    }
    console.log(decimal);
}

solve('00001001');
solve('11110000');