function solve(numbers, commands) {
    let i = 0,
        index,
        temp,
        addObj,
        el,
        pos;
    for (i = 0; i < commands.length; i += 1) {
        temp = commands[i].split(' ');

        if (temp[0] === 'print') {
            print(numbers);
            break;
        }
        else {
            switch (temp[0]) {
                case 'add':
                    index = Number(temp[1]);
                    addObj = Number(temp[2]);
                    add(numbers, index, addObj);
                    break;

                case 'addMany':
                    index = Number(temp[1]);
                    addItems = temp.slice(2).map(x => Number(x));
                    addMany(numbers, index, addItems);
                    break;

                case 'contains':
                    el = Number(temp[1]);
                    contains(numbers, el);
                    break;

                case 'remove':
                    index = Number(temp[1]);
                    remove(numbers, index);
                    break;

                case 'shift':
                    pos = Number(temp[1]);
                    shift(numbers, pos);
                    break;

                case 'sumPairs':
                    numbers = sumPairs(numbers);
                    break;
            }
        }
    }

    function print(arr) {
        console.log(arr);
    };

    function add(arr, index, element) {
        arr.splice(index, 0, element);
    };

    function addMany(arr, index, addItems) {
        while (addItems.length != 0) {
            arr.splice(index, 0, addItems.pop());
        }
    }

    function contains(arr, element) {
        console.log(arr.indexOf(element));
    }

    function remove(arr, index) {
        arr.splice(index, 1);
    }

    function shift(arr, positions) {
        let el;
        while (positions != 0) {
            el = arr.shift();
            arr.push(el);
            positions -= 1;
        }
    }

    function sumPairs(arr) {
        let pair,
            sumed = [];

        while (arr.length != 0) {
            pair = arr.splice(0, 2).reduce((a, b) => a + b);
            sumed.push(pair);
        }
        return sumed;
    }
}

solve([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
solve([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);