function solve(year,month,day){
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    console.log(date.getMonth());
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1)
        +  '-' + nextDate.getDate();
   
}

solve(2016, 9, 30);