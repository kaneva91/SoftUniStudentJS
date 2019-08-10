function solve(arr) {
    let i,
        energy = 100,
        curEnergy,
        coins = 100,
        currCoins,
        events = arr[0].split('|'),
        currEvent,
        isClosd = false;
 
    for (i = 0; i < events.length; i += 1) {
        currEvent = events[i].split('-');
 
        if (currEvent[0] === 'rest') {
            curEnergy = Number(currEvent[1]);
            energy += curEnergy;
 
            if (energy <= 100) {
                console.log(`You gained ${curEnergy} energy.`);
            }
            else if (energy > 100) {
                energy = 100;
                console.log(`You gained 0 energy.`);
            }
            console.log(`Current energy: ${energy}.`);
        }
 
        else if (currEvent[0] === 'order') {
            currCoins = Number(currEvent[1]);
           
 
            if (energy - 30 >= 0) {
                energy -= 30;
                coins += currCoins;
                console.log(`You earned ${currCoins} coins.`);
            }
            else if (energy - 30 < 0) {
                console.log('You had to rest!'); //?
                energy += 50;
            }
        }
 
        else {
 
            if (coins - Number(currEvent[1]) > 0) {
                coins -= Number(currEvent[1])
                console.log(`You bought ${currEvent[0]}.`);
            }
            else if (coins - Number(currEvent[1]) <= 0) {
                console.log(`Closed! Cannot afford ${currEvent[0]}.`);
                isClosd = true;
                break;
            }
        }
    }
 
    if (!isClosd) {
        console.log("Day completed!");
        console.log(`Coins: ${coins}`);
        console.log(`Energy: ${energy}`);
    }
}
solve(['rest-2|order-10|eggs-100|rest-10']);
solve(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000']);
