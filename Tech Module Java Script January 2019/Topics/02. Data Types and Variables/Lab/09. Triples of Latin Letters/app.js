function solve(n){
    let letters = '';
    for(let i = 0; i < n; i += 1){
        for(let j = 0; j < n; j += 1){
            for(let k = 0; k < n; k += 1){
                console.log(`${String.fromCharCode(97 + i)}${String.fromCharCode(97 + j)}${String.fromCharCode(97 + k)}`);
            }
        }
    }
}

solve(3);
