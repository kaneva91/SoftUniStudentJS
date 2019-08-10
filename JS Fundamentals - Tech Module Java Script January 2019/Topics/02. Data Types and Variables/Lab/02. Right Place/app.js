function solve(str, ch, result){
    str = str.replace('_', ch);
    console.log(str.match(result) ? 'Matched' : 'Not Matched');   
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');