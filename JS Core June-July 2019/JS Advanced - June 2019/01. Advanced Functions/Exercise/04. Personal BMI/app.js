function solve(name, age, weight, height) {

    let bmi = getBMI(weight, height),
        status = getStatus(bmi),

        result = {
            'name': name,
            'personalInfo': {
                age,
                weight,
                height
            },
            'BMI': bmi,
            'status': status
        };


    function getBMI(weight, height) {
        return Math.round(weight / Math.pow((height / 100), 2));
    }

    function getStatus(bmi) {
        let status = '';

        if (bmi < 18.5) {
            status = 'underweight';
        }
        else if (bmi >= 15.5 && bmi < 25) {
            status = 'normal';
        }
        else if (bmi >= 25 && bmi < 30) {
            status = 'overweight';
        }
        else {
            status = 'obese';
        }

        return status;
    }

    if (status === 'obese') {
        result['recommendation'] = 'admission required';
    }

    return result;
}

console.log(solve('Peter', 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));