function solve(arr) {
    let record = {};

    for (let line of arr) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');
        if (record.hasOwnProperty(name)) {
            let currCardsSet = record[name];
            cards.map(card => currCardsSet.add(card));
            record[name] = currCardsSet;
        }
        else {
            let cardsSet = new Set();
            cards.map(card => cardsSet.add(card));
            record[name] = cardsSet;
        }
    }

    let names = Object.keys(record);

    for (let name of names) {
        let cardsSet = record[name];
        cardset = [...cardsSet.values()];
        let currScore = score(cardsSet);
        record[name] = currScore;
    }
    Object.entries(record).map(x => console.log(`${x[0]}: ${x[1]}`));

    function score(cards) {
        let result = 0,
            power = {
                '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
            },
            type = {
                'S': 4, 'H': 3, 'D': 2, 'C': 1
            };

        for (let card of cards) {
            card = card.split('');
            let letter = card.pop();
            let number = card.join('')
            let p = power[number];
            let t = type[letter];
            result += (p * t);
        }
        return result;
    }

}




solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']
);