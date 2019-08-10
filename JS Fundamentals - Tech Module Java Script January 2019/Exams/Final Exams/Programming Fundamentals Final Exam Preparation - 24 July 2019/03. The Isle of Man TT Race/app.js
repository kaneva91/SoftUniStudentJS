function solve(arr) {
    let patt = /^([#\$%\*&])(.*)\1(=)(\d+)(!!)(.*)$/;

    const increaseChar = (code,len) => {
        return code.split('')
        .map(ch =>{
            return String.fromCharCode(ch.charCodeAt(0) + len)
        }).join('')
    }

    for (i = 0; i < arr.length; i+= 1) {
    
        let result = patt.exec(arr[i]);

        if (result) {
            let racer = result[2],
            len = Number(result[4]),
            code = result[6];

           if(code.length !== len){
            console.log('Nothing found!');
           }
           else{
               code = increaseChar(code, len);
               console.log(`Coordinates found! ${racer} -> ${code}`);
               break;
           }
        }
        else {
            console.log('Nothing found!');
        }
    }
}

/* solve(['%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S']);
 */
    solve([ 'Ian6Hutchinson=7!!\\(58ycb4',
    '#MikeHailwood#!!\'gfzxgu6768=11',
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
    'RichardQ^uayle=16!!fr5de5kd' ]
  
  )