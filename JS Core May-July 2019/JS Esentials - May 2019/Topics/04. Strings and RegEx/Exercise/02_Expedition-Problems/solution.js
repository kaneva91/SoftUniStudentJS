function solve() {

    let str = document.querySelector('#string').value,
        text = document.querySelector('#text').value,
        result = document.querySelector('#result'),

        coordPattern = /(east|north).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gim,

        north = '',
        east = '',

        coordinates = coordPattern.exec(text),
        msg = 'Message: ' + text.match(new RegExp(`(?<=${str}).+(?=${str})`, 'gim'));

    while (coordinates) {
       
        if (coordinates[1].toLowerCase() === 'north') {
            north = `${coordinates[2]}.${coordinates[3]} N`;
        }
        else if (coordinates[1].toLowerCase() === 'east') {
            east = `${coordinates[2]}.${coordinates[3]} E`;
        }

        coordinates = coordPattern.exec(text);
    }

    let pNorth = document.createElement('p'),
        pEast = document.createElement('p'),
        pMsg = document.createElement('p');

    pNorth.textContent = north;
    pEast.textContent = east;
    pMsg.textContent = msg;

    result.appendChild(pNorth);
    result.appendChild(pEast);
    result.appendChild(pMsg);
}
