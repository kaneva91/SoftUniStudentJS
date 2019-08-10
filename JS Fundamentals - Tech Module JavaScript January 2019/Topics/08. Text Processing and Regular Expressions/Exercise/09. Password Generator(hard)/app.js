function solve(input) {
    let password = (input[0] + input[1]).toLowerCase().split(''),
        replaceChars = input[2].toUpperCase().split(''),
        index = 0;

    for (i = 0; i < password.length; i += 1) {
        let char = password[i];
        
        if (char === 'a' || char === 'e' || char === 'o' || char === 'u' || char === 'i') {
            if (index === replaceChars.length) {
                index = 0;
            }
            password[i] = replaceChars[index];
            index += 1;
        }
    }
    console.log(`Your generated password is ${password.reverse().join('')}`);
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);
solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
solve(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);