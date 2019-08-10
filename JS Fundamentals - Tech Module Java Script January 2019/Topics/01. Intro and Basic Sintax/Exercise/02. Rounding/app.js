function solve(n, round){
    if(round > 15){
        round = 15;
    }
    n = n.toFixed(round);
   console.log(parseFloat(n));
}

solve(3.1415926535897932384626433832795,2);
solve(10.5,3);
