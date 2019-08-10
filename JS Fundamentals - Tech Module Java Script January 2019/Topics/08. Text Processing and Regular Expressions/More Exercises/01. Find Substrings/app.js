function solve(paramOne, paramTwo) {
    let text = paramOne,
        pattern = new RegExp(paramTwo, 'gi'),
        coutner = 0;

    while (pattern.exec(text) !== null) {
        coutner += 1;
    }
    console.log(coutner);
}

solve("Welcome to the Software University (SoftUni)! Welcome to programming. Programming is wellness for developers, said Maxwell.", "wel");
