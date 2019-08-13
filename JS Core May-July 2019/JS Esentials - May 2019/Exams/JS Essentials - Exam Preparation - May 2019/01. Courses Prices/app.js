function solve(fundamentals, advanced, applications, form) {
    let total = 0;

    if (fundamentals && advanced && applications) {
        total = (170 + 180* 0*9  + 190) * 0.94;
    }

    else if (advanced && fundamentals) {
        total = 180 * 0.9 + 170;
    }


    else {
        if (fundamentals) {
            total += 170;
        }
        if (advanced) {
            total += 180;
        }
        if (applications) {
            total += 190;
        }
    }

    if (form === 'online') {
        total = total * 0.94;
    }

    console.log(Math.round(total));
}

solve(true, false, false, "onsite");
solve(true, false, false, "online");
solve(true, true, false, "onsite");


