function solve() {
    let clearBtn = document.querySelector('.clear'),
        otherAllBrns = Array.from(document.querySelectorAll('.keys button')),
        expresion = document.querySelector('#expressionOutput'),
        result = document.querySelector('#resultOutput'),
        firstOperand,
        secondOperand;


    clearBtn.addEventListener('click', clear);
    otherAllBrns.forEach(btn => btn.addEventListener('click', calculate));

    function clear() {
        expresion = document.querySelector('#expressionOutput'),
            result = document.querySelector('#resultOutput');

        expresion.textContent = '';
        result.textContent = '';
    };

    function calculate() {
        if (this.value === '=') {
            let input = document.querySelector('#expressionOutput');
            input = input.textContent;

            if (input.includes('+')) {
                [firstOperand, secondOperand] = input.split(' + ');
                if (firstOperand === '' || secondOperand === '') {
                    result.textContent = 'NaN';
                }
                else {
                    result.textContent = +firstOperand + +secondOperand;
                }
            }

            else if (input.includes('-')) {
                [firstOperand, secondOperand] = input.split(' - ');
                if (firstOperand === '' || secondOperand === '') {
                    result.textContent = 'NaN';
                }
                else {
                    result.textContent = +firstOperand - +secondOperand;
                }
            }

            else if (input.includes('*')) {
                [firstOperand, secondOperand] = input.split(' * ')
                if (firstOperand === '' || secondOperand === '') {
                    result.textContent = 'NaN';
                }
                else {
                    result.textContent = +firstOperand * +secondOperand;
                }
            }

            else if (input.includes('/')) {
                [firstOperand, secondOperand] = input.split(' / ')
                if (firstOperand === '' || secondOperand === '') {
                    result.textContent = 'NaN';
                }
                else {
                    result.textContent = +firstOperand / +secondOperand;
                }
            }

        }
        else if (this.value === '+' || this.value === '-' || this.value === '/' || this.value === '*') {
            expresion.textContent += ` ${this.value} `;
        }
        else {
            expresion.textContent += this.value;

        }


    }
}