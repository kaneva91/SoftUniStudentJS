function solve(group, type,day){
    let totalPrice = 0;
    if(type === 'Students'){
        if(day === 'Friday'){
            totalPrice = group * 8.45;
        }
        else if(day === 'Saturday'){
            totalPrice = group * 9.80;
        }
        else if(day === 'Sunday'){
            totalPrice = group * 10.46;
        }

        if(group >= 30){
            totalPrice *= 0.85;
        }
    }
    else if(type === 'Business'){
        if(group >= 100){
            group -= 10;
        }

        if(day === 'Friday'){
            totalPrice = group * 10.90;
        }
        else if(day === 'Saturday'){
            totalPrice = group * 15.60;
        }
        else if(day === 'Sunday'){
            totalPrice = group * 16;
        }
    }
    else if(type === 'Regular'){
        if(day === 'Friday'){
            totalPrice = group * 15;
        }
        else if(day === 'Saturday'){
            totalPrice = group * 20;
        }
        else if(day === 'Sunday'){
            totalPrice = group * 22.50;
        }

        if(group >= 10 && group <= 20){
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");