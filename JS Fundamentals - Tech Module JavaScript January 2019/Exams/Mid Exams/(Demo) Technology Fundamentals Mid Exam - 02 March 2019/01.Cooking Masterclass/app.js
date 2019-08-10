function solve([budget, students, priceFlour, priceEgg, priceAporn]) {
    let freeFlour = Math.floor(students / 5),
        moneyNeeded = 0;

    moneyNeeded = priceFlour * (students - freeFlour) +
        students * priceEgg * 10 +
        priceAporn * (Math.ceil(students * 1.2));

    console.log(moneyNeeded <= budget ?
        `Items purchased for ${moneyNeeded.toFixed(2)}$.` :
        `${(moneyNeeded - budget).toFixed(2)}$ more needed.`);

}

solve([50, 2, 1.0, 0.10, 10.0]);
solve([100, 25, 4.0, 1.0, 6.0]);