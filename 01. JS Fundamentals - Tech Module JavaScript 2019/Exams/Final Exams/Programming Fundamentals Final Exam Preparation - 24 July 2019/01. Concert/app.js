function solve(arr) {
    let bandToDisplay = arr.pop(),
        timePlayed = {},
        bands = {},
        totalTimePlayed = 0;

    const addMembers = (toBeAdded, membersArray) => {
        toBeAdded.forEach(member => {
            if (!membersArray.includes(member)) {
                membersArray.push(member)
            }
        });

        return membersArray;
    }

    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === 'start of concert') {
            break;
        }
        let [command, bandName, restOfTheString] = arr[i].split('; ')
        if (command === 'Add') {
            let membersToBeAdded = restOfTheString.split(', ');

            if (!bands.hasOwnProperty(bandName)) {

                let members = addMembers(membersToBeAdded, []);

                bands[bandName] = members;
            }

            else {
                let members = bands[bandName];
                members = addMembers(membersToBeAdded, members);
                bands[bandName] = members;
            }
        }
        else if (command === 'Play') {
            let time = Number(restOfTheString);

            if (!timePlayed.hasOwnProperty(bandName)) {
                timePlayed[bandName] = time;
            }
            else {
                timePlayed[bandName] += time;
            }
        }
    }

    let resultArr = [];
    Object.entries(timePlayed)
        .sort((a, b) => b[1] - a[1])
        .forEach(pair => {
            let [band, time] = pair
            totalTimePlayed += time;
            resultArr.push(`${band} -> ${time}`);
        })

    resultArr.unshift(`Total time: ${totalTimePlayed}`);
    resultArr.push(bandToDisplay);

    bands[bandToDisplay]
        .forEach(member => resultArr.push(`=> ${member}`));

    console.log(resultArr.join('\n'));

}

solve([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
]);

solve([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
]);