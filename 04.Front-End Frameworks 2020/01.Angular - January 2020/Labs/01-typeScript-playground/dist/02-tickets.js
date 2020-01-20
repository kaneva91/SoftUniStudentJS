"use strict";
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
function getResult(data, criteria) {
    let result = data.map(line => {
        let [destination, price, status] = line.split('|');
        return new Ticket(destination, +price, status);
    }); //cannot be sorted here
    if (criteria === 'destination' || criteria === 'status' || criteria === 'price') { // why criteria types should be checked?
        return result.sort((a, b) => {
            if (a[criteria] < b[criteria])
                return -1;
            if (a[criteria] > b[criteria])
                return 1;
            return 0;
        });
    }
}
let result1 = getResult([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
console.log(result1);
let result2 = getResult([
    'Philadelphia|194.20|available',
    'New York City|95.99|available',
    'New York City|96.99|sold',
    'Boston|126.20|departed'
], 'price');
console.log(result2);
//# sourceMappingURL=02-tickets.js.map