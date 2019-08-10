function solve(day, age){

    function ageChecker(sum1, sum2){
        if((age >= 0 && age <= 18) || (age >= 65 && age <= 122)){
            console.log(sum1);
    }
    else if(age >= 19 && age <= 64){
        console.log(sum2);
        }
        else{
            console.log('Error!');
        }
    }

    if(day === 'Weekday' ){
        ageChecker('12$', '18$');
    }
    else if(day === 'Weekend'){
        ageChecker('15$', '20$');
    }
    else if(day === 'Holiday'){
        if(age >= 0 && age <= 18){
            console.log('5$');
        }
        else if (age >= 19 && age <= 64){
            console.log('12$');
        }
        else if(age >= 65 && age <= 122){
            console.log('10$');    
        }
        else{
            console.log('Error!');
        }
    }
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);