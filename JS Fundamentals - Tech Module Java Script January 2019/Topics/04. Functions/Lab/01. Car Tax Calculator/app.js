function solve(kw) {

    console.log(`${(carTaxCalculator(kw)).toFixed(2)} lv.`);
    function carTaxCalculator(kw) {
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
}

solve(57.50);
solve(90);
solve(255.9);