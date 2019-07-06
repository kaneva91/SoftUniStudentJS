function solve(input) {
    let speed = input[0],
        area = input[1],
        result;

    switch (area) {
        case 'motorway':
            result = output(130, speed);
            break;
        case 'interstate':
            result = output(90, speed);
            break;
        case 'city':
            result = output(50, speed);
            break;
        case 'residential':
            result = output(20, speed);
            break;
    }

    console.log(result);

    function output(limit, speed) {
        if (speed <= limit) {
            return ''
        }
        else if (speed > limit && speed <= limit + 20) {
            return 'speeding';
        }
        else if (speed > limit && speed <= limit + 40) {
            return 'excessive speeding';
        }
        else {
            return 'reckless driving';
        }
    }

}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);