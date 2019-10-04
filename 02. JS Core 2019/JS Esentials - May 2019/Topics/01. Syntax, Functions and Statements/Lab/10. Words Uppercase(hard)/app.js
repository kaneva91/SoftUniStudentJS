function solve(input){
    let pattern = /[a-z0-9]+/gi;
    let result = input.match(pattern).map(x => x.toUpperCase());
    console.log(result.join(', '));
}

solve('Hi, how are you?');
solve('hello');