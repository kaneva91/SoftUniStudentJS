function solve(arr){
    let patt = /^(.*)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1$/;
    let len = Number(arr.shift());

    for (i = 0; i < len; i+= 1) {
        let res =  patt.exec(arr[i]);

        if(res){
            let gpoupOne = res[2],
                groupTwo = res[3],
                groupThree = res[4],
                groupFour = res[5];

                console.log(`Password: ${gpoupOne + groupTwo + groupThree + groupFour}`);
        }
        else{
            console.log('Try another password!');
        }
    }
}

solve([ '3',
'##>00|no|NO|!!!?<###',
'##>123|yes|YES|!!!<##',
'$$<111|noo|NOPE|<<>$$' ])

console.log('-----------');
solve([ '5',
'aa>111|mqu|BAU|mqu<aa',
'()>111!aaa!AAA!^&*<()',
'o>088|abc|AAA|***<o',
'asd>asd|asd|ASD|asd<asd',
'*>088|zzzz|ZzZ|123<*' ])