function solve(arr) {
    let n = arr.shift(),
        firstElements = arr.slice().splice(0, n);
    secondElements = arr.slice().splice(-n);
    console.log(firstElements.join(' '))
    console.log(secondElements.join(' '));

}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);