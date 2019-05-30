function solve(n){
    let classColor = 'black';
    console.log('<div class="chessboard">');
    for(let i = 1; i <= n; i += 1){
        console.log('  <div>');
        for (let j = 1; j <= n; j += 1) {
            console.log(`    <span class="${classColor}"></span>`);
            classColor = classColor === 'black' ? 'white' : 'black';
        }
        if(n % 2 == 0){
            classColor = classColor === 'white' ? 'black' : 'white';
        }
        console.log('  </div>');
    }
    console.log('</div>');

}
solve(3);