function solve(arr) {
    let phoneBook = {};

    for (let i = 0; i < arr.length; i += 1) {
        let [name, phone] = arr[i].split(' ');
        phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}


solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);