function solve() {
  let texteL = document.querySelector('#text'),
    resultEl = document.querySelector('#result'),

    input = texteL.value.split(' ').filter(x => x !== ''),

    wordResult = '';

  input.forEach(element => {
    if (Number(element) || element === '0') {
      wordResult += (String.fromCharCode(element));
    }

    else {
      let currWordLetters = element.split('');

      currWordLetters.map(char => char.charCodeAt(0)),
        asciiChars = currWordLetters.map(char => char.charCodeAt(0));

      p = document.createElement('p');
      p.textContent = asciiChars.join(' ');

      resultEl.appendChild(p);
    }
  });

  let par = document.createElement('p');
  par.textContent = wordResult;

  resultEl.appendChild(par);
}