function solve(input) {
    let pattern = /[A-Z]/g,
        text = input,
        inexesOfCapitals = [],
        result = [];

    while (true) {
        let current = pattern.exec(text);

        if (current === null) {
            break;
        }
        else {
            inexesOfCapitals.push(current.index);
        }
    }

    for (i = 0; i < inexesOfCapitals.length; i += 1) {
        let firstInd = inexesOfCapitals[i],
            nextInd = inexesOfCapitals[i + 1],
            word = text.substr(firstInd, nextInd - firstInd);

        if (nextInd === undefined) {
            word = text.substr(firstInd);
        }

        result.push(word);
    }

    console.log(result.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');