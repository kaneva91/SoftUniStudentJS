function solve(distance, passengers, fuelCostForLiter){
    let moneyNeeded = (((distance / 100) * 7) + (passengers * 0.1)) * fuelCostForLiter;
    console.log(`Needed money for that trip is ${moneyNeeded}lv.`);
}

solve(260, 9, 2.49);
solve(90, 14, 2.88);