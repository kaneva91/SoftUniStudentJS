function solve(commands) {
    let i, j,
        temp,
        update,
        index,
        account = commands.shift().split(' ');

    for (i = 0; i < commands.length - 1; i += 1) { // length - 1, because last command is always "Play!"
        temp = commands[i].split(' ');
        switch (temp[0]) {
            case 'Install':
                if (!account.includes(temp[1])) {
                    account.push(temp[1]);
                }
                break;
            case 'Uninstall':
                if (account.includes(temp[1])) {
                    index = account.indexOf(temp[1]);
                    account.splice(index, 1);
                }
                break;
            case 'Update':
                if (account.includes(temp[1])) {
                    index = account.indexOf(temp[1]);
                    update = account.splice(index, 1);
                    account.push(update);
                }
                break;
            case 'Expansion':
            index = temp[1].indexOf('-'); // намирам индекса на тирето
            game = temp[1].slice(0, index); // взимам само играта от индекс 0 до индекса на тирето (невключително)
            index = account.indexOf(temp); // търся индекса на играта. Ако играта я няма в акаунта, индексът, ще е -1
            if (index > -1) {
                update = temp[1].replace('-', ':');
                account.splice(index + 1, 0, update); // вз
                break;
        }
    }
    console.log(account.join(' '));
}

solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);

solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);