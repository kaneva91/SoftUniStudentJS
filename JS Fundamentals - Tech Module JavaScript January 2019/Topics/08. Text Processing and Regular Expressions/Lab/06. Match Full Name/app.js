function solve(input) {
    let text = input,
        result = [],
        pettern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g,
        match = '';

    while ((match = pettern.exec(text)) !== null) {
        result.push(match[0]);
    }

    console.log(result.join(' '));
}

solve('Steven Son, Steven son, steven Son, STeven Son, Michael Braun, MichaelBraun');