function solve(input) {
    let firstHalf = input.slice(0, input.length / 2).
        split('').
        reverse().
        join(''),
        
        secondHalf = input.substr(input.length / 2).
        split('').
        reverse().
        join('');

    console.log(firstHalf);
    console.log(secondHalf);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');