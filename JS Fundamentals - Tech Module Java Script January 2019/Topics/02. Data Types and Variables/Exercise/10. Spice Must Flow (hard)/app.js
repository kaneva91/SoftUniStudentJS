function solve(spiceExtractPerDay){
    let days = 0,
        spiceTotal = 0;
    while (spiceExtractPerDay >= 100) {
        spiceTotal += spiceExtractPerDay;
        spiceTotal -= 26; //Workers' consumation
        spiceExtractPerDay -= 10;
        days += 1;
    }
    if(days > 0){
        spiceTotal -= 26;
    }
    console.log(days);
    console.log(spiceTotal);
}

solve(111);