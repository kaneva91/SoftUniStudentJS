function solve(arr) {
    let patt = /(^[A-Z][a-z ']+):([A-Z ]+)$/;

    const 
    
    letterCheck = (code, min, max) =>{
        if(code > max){
            while (code > max) {
                code = code - max + min - 1;
            }
        }
        return code;
    },
    
    encrypt = (char, len) => {
        let code = char.charCodeAt(0);
        if(char === ':'){
            return '@';
        }
        
        else if (code >= 65 && code <= 90) {
            code += len;
            code = letterCheck(code, 65, 90);
        }
        else if(code >= 97 && code <=122){
            code += len;
            code = letterCheck(code, 97, 122);

        }
        return String.fromCharCode(code);
    };

  




    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === 'end') {
            break;
        }

        let result = patt.exec(arr[i]);
        if (result) {
           
            let artist = result[1],
             str = result[0];

            str = str.split('')
                .map(char => encrypt(char, artist.length))
                .join('');
        console.log(`Successful encryption: ${str}`);

        }

        else {
            console.log('Invalid input!');
        }

    }
}


/* 
solve(['Eminem:VENOM', 
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end']);

 */

 solve([ 'Michael Jackson:ANOTHER PART OF ME',
 'Adele:ONE AND ONLY',
 'Guns n\'roses:NOVEMBER RAIN',
 'Christina Aguilera: HuRt',
 'end' ]
)