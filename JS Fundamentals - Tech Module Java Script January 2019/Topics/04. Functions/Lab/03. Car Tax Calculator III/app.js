function solve(type, kw, age) {
    console.log(`${vechileTaxCalc(type).toFixed(2)} lv.`);

    function vechicleTaxByKW(kw) {
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
            return kw * 1.54;s
        }
    }

    function vechicleTaxByAge(age) {
        if (age < 5) {
            return vechicleTaxByKW(kw) * 2.80;
        }
        else if (age >= 5 && age <= 14) {
            return vechicleTaxByKW(kw) * 1.50;
        }
        else {
            return vechicleTaxByKW(kw) * 1.0;
        }
    }

    function vechileTaxCalc(type) {
        let result = 0;
        switch (type) {
            case 'motorcycle':
                //todo
                break;
            case 'car':
                result = vechicleTaxByAge(age);
                break;
        }
        return result;
    }
}

//solve('motorcycle'45010);
solve('car', 90, 7);
