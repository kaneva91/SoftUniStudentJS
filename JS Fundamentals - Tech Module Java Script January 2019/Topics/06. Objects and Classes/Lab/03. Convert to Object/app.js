function solve(json) {
    let obj = JSON.parse(json),
        entries = Object.entries(obj);

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');