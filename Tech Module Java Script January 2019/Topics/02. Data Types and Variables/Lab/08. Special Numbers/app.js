function solve(n){
    let sum = 0,
        value = 0,
        isSpecial = false;
    
    for(let i = 1; i <= n; i += 1){
        value = i;

        while(value > 0){
            sum += (value % 10);
            value = Math.floor(value / 10);
        }
        
        if(sum === 5 || sum === 7 || sum  === 11){
            isSpecial = true;
        }
        console.log(i + " -> " + (isSpecial ? 'True' : 'False'));
        sum = 0;
        isSpecial = false;       
    }  
}

solve(15);