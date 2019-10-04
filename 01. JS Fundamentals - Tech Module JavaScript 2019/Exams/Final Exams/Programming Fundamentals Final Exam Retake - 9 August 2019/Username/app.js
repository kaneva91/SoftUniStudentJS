function solve(input) {
    let username = input.shift();

    for (i = 0; i < input.length; i += 1) {
        if (input[i] === 'Sign up') {
            break;
        }

        let [command, ...restOfTheString] = input[i].split(" ");

        if (command === 'Case') {
            if (restOfTheString[0] === 'lower') {
                username = username.toLowerCase()
            }
            else {
                username = username.toUpperCase()
            }
            console.log(username);
        }

        else if (command === 'Reverse') {
            let startIndex = Number(restOfTheString[0]),
                endIndex = Number(restOfTheString[1]);

            if(startIndex < endIndex && startIndex >= 0 && endIndex <= username.length){
                let toBeReversed = username.substring(startIndex, endIndex + 1)
                .split('').reverse().join('');
            console.log(toBeReversed);

            }
        }

        else if (command === 'Cut') {
            let sub = restOfTheString;
            if (username.includes(sub)) {
                let index = username.indexOf(sub);
                username = username.replace(sub, '')

                console.log(username);
            }
            else {
                console.log(`The word ${username} doesn't contain ${sub}.`);
            }
        }

        else if(command ==='Replace'){
            let char = restOfTheString[0];
            let patt = new RegExp(char, 'g')
            username = username.replace(patt, '*')
            console.log(username);
        }

        else if(command === 'Check'){
            let char = restOfTheString[0];
            console.log(username.includes(char) ? 'Valid' : `Your username must contain ${char}.`);
            
        }

    }
}

// solve(['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up'])

solve(['ThisIsMyString',
    'Reverse 1 4',
    'Replace i',
    'Cut My',
    'Sign up']);