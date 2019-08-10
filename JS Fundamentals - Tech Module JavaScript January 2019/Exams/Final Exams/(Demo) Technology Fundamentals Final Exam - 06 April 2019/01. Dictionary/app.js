function solve(arr) {

    let dictionary = {};
    let [input, words, output] = arr;

    input = input.split(' | ');
    words = words.split(' | ');

    for (const line of input) {
        let [word, meaning] = line.split(': ');

        if (dictionary.hasOwnProperty(word)) {
            let definitions = dictionary[word];
            definitions.push(meaning);
            dictionary[word] = definitions;
        }
        else {
            let definition = [];
            definition.push(meaning)
            dictionary[word] = definition;
        }
    }

    let result = Object.getOwnPropertyNames(dictionary);

    if (output === 'List') {
        console.log(result.sort().join(' '));
    }
    else if (output === 'End') {
        let filteredResult  = {};

        for (const word of words) {
            if(result.includes(word)){
                filteredResult[word] = dictionary[word];
            }
        }
        result = Object.getOwnPropertyNames(filteredResult);

        for (const word of result) {
            console.log(word);

            let defs = dictionary[word].sort((a, b) => a.length < b.length).
                map(x => console.log(` -${x}`));
        }
    }
}

/* solve(['programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List']);
 */
solve(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End']);