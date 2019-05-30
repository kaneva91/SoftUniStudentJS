function solve(character){
    if(character === character.toUpperCase()){
        console.log('upper-case');
    }
    else if(character === character.toLowerCase()){
        console.log('lower-case');
    }
}

solve('L');
solve('f');