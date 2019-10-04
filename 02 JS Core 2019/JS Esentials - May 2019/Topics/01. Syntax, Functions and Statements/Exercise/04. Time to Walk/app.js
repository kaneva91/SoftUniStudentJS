function solve(steps, footprint, speed) {
    let length = (steps * footprint) / 1000,

        time = (length / speed) + (Math.floor(length / 0.5) / 60),

        hours = parseInt(time),

        minutes = parseInt((time % 1) * 60),

        seconds = Math.ceil((((time % 1) * 60) % 1) * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5)