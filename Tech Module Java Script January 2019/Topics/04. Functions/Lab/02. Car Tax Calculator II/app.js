function solve(kw, age) {

    console.log(`${(carTaxByAge(age).toFixed(2))} lv.`);
    function carTaxBYKW(kw) {
        if (kw < 37) {
            return kw * 0.43;
        }
        else if (kw > 37 && kw <= 55) {
            return kw * 0.5
        }
        else if (kw > 55 && kw <= 74) {
            return kw * 0.68
        }
        else if (kw > 74 && kw <= 110) {
            return kw * 1.38
        }
        else {
            return kw * 1.54;
        }
    }

    function carTaxByAge(age) {
        if (age < 5) {
            return carTaxBYKW(kw) * 2.80;
        }
        else if (age >= 5 && age <= 14) {
            return carTaxBYKW(kw) * 1.50;
        }
        else {
            return carTaxBYKW(kw) * 1.0;
        }
    }
}

solve(45,10);
solve(90, 7);
solve(310, 0.5);