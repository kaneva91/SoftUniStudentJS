let variable = (function(){
    let sum = 0;

    return function add(n){
        sum += n;
        add.toString = function(){
            return sum;
        };
        return add;
    }
} )();
console.log(solve(add(1)));
console.log((variable(1)(6)(-3).toString()));

//Judge required only the IIFE function