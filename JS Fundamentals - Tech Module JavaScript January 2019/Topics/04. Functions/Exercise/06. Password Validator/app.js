function solve(password) {
    let result = [],
        i;

    result.push(hasProperLength(password));
    result.push(hasOnlyLettersAndDigits(password));
    result.push(hasAtLeastTwoDigits(password));


    if (result.every(x => x === 'valid')) {
        console.log('Password is valid');
    }
    else {
        for (i = 0; i < result.length; i += 1) {
            if (result[i] != 'valid') {
                console.log(result[i]);
            }
        }
    }

    function hasProperLength(password) {
        return (password.length >= 6 && password.length <= 10) ?
            'valid' :
            'Password must be between 6 and 10 characters';
    }

    function hasOnlyLettersAndDigits(password) {
        let i,
            charCode,
            isValid = true;

        password = password.toLowerCase();

        for (i = 0; i < password.length; i += 1) {
            charCode = password.charCodeAt(i);

            if (charCode >= 48 && charCode <= 122) {
                if (charCode > 57 && charCode < 97) {
                    isValid = false;
                    break;
                }
            }
            else {
                isValid = false;
                break;
            }
        }
        return isValid ? 'valid' : 'Password must consist only of letters and digits';
    }

    function hasAtLeastTwoDigits(password) {
        let i,
            counter = 0;

        for (i = 0; i < password.length; i += 1) {
            charCode = password.charCodeAt(i);

            if (charCode >= 48 && charCode <= 57) {
                counter += 1;
            }
        }

        return counter >= 2 ? 'valid' : 'Password must have at least 2 digits';
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');