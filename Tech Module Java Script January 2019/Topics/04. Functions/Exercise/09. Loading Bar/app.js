function solve(persent) {
    loadingBarVisualisation(persent);

    function loadingBarVisualisation(persent) {
        if (persent === 100) {
            console.log('100% Complete\n[%%%%%%%%%%]');
        }
        else {
            console.log(`${persent}% [${'%'.repeat(persent / 10)}${'.'.repeat((100 - persent) / 10)}]\nStill loading...`);
        }
    }
}

solve(30);
solve(50);
solve(100);

console.log([5, 6, 90, 60, 70].reduce((x, y) => Math.max(x, y)));
//console.log(['pesgp', 'drfrdd', 'd', 'df'].sort((x, y) => x.length - y.length));