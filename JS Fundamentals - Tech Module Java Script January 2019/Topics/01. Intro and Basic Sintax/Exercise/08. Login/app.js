function solve(input){
    let username = input[0],
        counter = 0,
        password = "";
    for(let i = 1; i< input.length; i +=1){
        password = input[i].split("").reverse().join("");
        if(username !== password){
            counter += 1;
            if(counter === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');   
        }
        else{
            console.log(`User ${username} logged in.`);
            break;
        }
    }
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);