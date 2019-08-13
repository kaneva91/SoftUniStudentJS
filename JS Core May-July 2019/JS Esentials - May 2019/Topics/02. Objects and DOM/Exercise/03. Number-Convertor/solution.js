function solve() {

    let selectMenutoOption1 = document.querySelector('#selectMenuTo option');

    selectMenutoOption1.setAttribute('value', 'binary');
    selectMenutoOption1.textContent = 'Binary';

    let parenteLselectToMenu = document.querySelector('#selectMenuTo'),
        selectMenutoOption2 = document.createElement('option');

    selectMenutoOption2.setAttribute('value', 'hexadecimal');
    selectMenutoOption2.textContent = 'Hexadecimal';

    parenteLselectToMenu.appendChild(selectMenutoOption2);


    let button = document.querySelector('button');

    button.addEventListener('click', convertNumber);

    function convertNumber() {
        let numberInput = document.querySelector('#input'),
            number = numberInput.value;

        numberInput.value = "";

        if (number !== '') {
            let optionsMeny = document.querySelector('#selectMenuTo'),
            option = optionsMeny.options[optionsMeny.selectedIndex].value,
            result;
            
            if(option === 'binary'){
                result = Number(number).toString(2);
            }
            else{
                result = Number(number).toString(16).toUpperCase();
            }
            let resultOInput = document.querySelector('#result');
            resultOInput.value = result;
        }
    }
}