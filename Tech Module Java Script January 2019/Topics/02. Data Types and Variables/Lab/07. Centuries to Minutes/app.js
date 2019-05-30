function solve(centures){
    let years = centures * 100,
        days = Math.trunc(years * 365.2422),
        hours = days * 24,
        minutes = hours * 60;
    console.log(`${centures} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

solve(1);
solve(5);