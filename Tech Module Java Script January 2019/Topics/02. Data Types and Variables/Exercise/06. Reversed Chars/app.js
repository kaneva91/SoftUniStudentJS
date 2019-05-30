function solve(par1, par2, par3){
    let output = par1 + ' ' + par2 + ' '+ par3;
    output = output.split('').reverse().join('');
    console.log(output);
}

solve('A', 'B','C');
solve('1', 'L', '&');
