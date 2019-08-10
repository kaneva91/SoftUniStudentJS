function solve(arr1, arr2) {
    let takeCount = arr2[0],
        deletecount = arr2[1],
        searchNum = arr2[2],

        numbers = arr1.splice(0, takeCount);
    numbers.splice(0, deletecount);
    numbers = numbers.filter(x => x === searchNum);

    console.log(`Number ${searchNum} occurs ${numbers.length} time.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);