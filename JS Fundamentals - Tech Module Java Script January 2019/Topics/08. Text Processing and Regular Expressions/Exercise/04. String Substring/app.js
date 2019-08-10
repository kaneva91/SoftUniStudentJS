function solve(paramOne, paramTwo){
    let word = paramOne,
        pattern = new RegExp(`\\b${word}\\b`, 'i'),
        text = paramTwo.toLowerCase(),
        result = text.match(pattern);
        
        console.log(result !== null ? word : `${word} not found!`);
}

solve('javascript',
'JavaScript is the best programming language');
solve('python',
'JavaScript is the best programming language');