function solve(input) {
    let text = input,
        pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g,
        result = [];
    let match = '';

    while (match = pattern.exec(text)) {
        result.push(match[0])
    }

    console.log(result.join(', '));
}

solve('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222');