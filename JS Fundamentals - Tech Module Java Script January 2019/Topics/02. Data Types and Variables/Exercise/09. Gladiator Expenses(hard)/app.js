function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice){
    let brokenHelmetsTotal = 0,
        brokenSwordsTotal = 0,
        brokenShieldsTOtal= 0;
        brokenArmourTotal = 0,
        counterHelmetAndSwordBrokenBoth = 0,
        aureusTotal = 0;
    for (let i = 1; i <= lostFights; i+= 1) {
        if( i % 2 === 0){       //Helmet breaks every second lost game
            brokenHelmetsTotal += 1;
            counterHelmetAndSwordBrokenBoth += 1;
        }
        if(i % 3 === 0){        //Sword breaks every third game
            brokenSwordsTotal += 1;
            counterHelmetAndSwordBrokenBoth += 1;
        }
        if(counterHelmetAndSwordBrokenBoth === 2){    //Shield breaks when both telmet and sword break in same lost game
            brokenShieldsTOtal += 1;
        }
        counterHelmetAndSwordBrokenBoth = 0;  
    }
    brokenArmourTotal = Math.trunc(brokenShieldsTOtal / 2);     //Armour breaks every second time when shield breaks
    aureusTotal = helmetPrice * brokenHelmetsTotal + swordPrice * brokenSwordsTotal + shieldPrice * brokenShieldsTOtal + armourPrice * brokenArmourTotal;
    console.log(`Gladiator expenses: ${aureusTotal.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);