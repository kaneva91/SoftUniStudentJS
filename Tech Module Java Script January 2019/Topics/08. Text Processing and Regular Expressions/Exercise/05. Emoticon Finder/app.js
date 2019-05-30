function solve(input) {
    
    let text = input.split(' ');
    for (let word of text) {
        if(word.length === 2 && word.startsWith(':')){
            console.log(word);
        }
    }
}

solve('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)');
