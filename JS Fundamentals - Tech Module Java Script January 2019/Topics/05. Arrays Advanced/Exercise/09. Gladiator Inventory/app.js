function solve(commands) {
    let i,
        inventory = commands.shift().split(' '),
        temp = [],
        command,
        equipment;

    for (i = 0; i < commands.length; i += 1) {

        temp = commands[i].split(' ');
        command = temp[0];
        equipment = temp[1];

        switch (command) {
            case 'Buy':
                buy(inventory, equipment);
                break;

            case 'Trash':
                trash(inventory, equipment);

                break;
            case 'Repair':
                repair(inventory, equipment);
                break;

            case 'Upgrade':
                upgrade(inventory, equipment);
                break;
        }
    }

    console.log(inventory.join(' '));

    function buy(inventory, equipment) {
        if (inventory.indexOf(equipment) === -1) {
            inventory.push(equipment);
        }
    }

    function trash(inventory, equipment) {
        let index = inventory.indexOf(equipment);

        if (index !== -1) {
            inventory.splice(index, 1);
        }
    }

    function repair(inventory, equipment) {
        let index = inventory.indexOf(equipment),
            item;
        if (index !== -1) {
            item = inventory.splice(index, 1);
            inventory.push(item);
        }
    }

    function upgrade(inventory, upgrade) {
        let dash = upgrade.indexOf('-'),
            item = upgrade.substr(0, dash),
            index = inventory.indexOf(item);

        if (index != -1) {
            upgrade = upgrade.replace('-', ':');
            inventory.splice(index + 1, 0, upgrade);
        }
    }
}

solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);

solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);
