function solve(arr) {
    let x1 = arr[0],
        y1 = arr[1],
        x2 = arr[2],
        y2 = arr[3];

    calc(x1, y1, 0, 0);
    calc(x2, y2, 0, 0);
    calc(x1, y1, x2, y2);


    function calc(x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

        if (Number.isInteger(result)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);