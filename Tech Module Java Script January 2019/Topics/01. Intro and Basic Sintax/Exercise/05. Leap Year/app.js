function solve(isLeapYear){
    if(isLeapYear % 4 === 0 && isLeapYear % 100 !== 0){
        console.log('yes');
    }
    else if(isLeapYear % 400 === 0){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}

solve(1984);
solve(2003);
solve(4);