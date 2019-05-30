function solve() {
  //TODO...

  let text = document.getElementById('input').textContent,
    outputDiVEl = document.getElementById('output');

  text = text.split('.').filter(x => x !== '').map(x => x + '.');

  if (text.length <= 2) {
    let p = document.createElement('p');
    p.innerText = text.join('');
    outputDiVEl.appendChild(p);
  }

  else {
    for (i = 0; i < text.length; i += 3) {

      let p = document.createElement('p');

      if (text[i] !== undefined) {
        p.innerText = text[i];
      }

      if (text[i + 1] !== undefined) {
        p.innerText += text[i + 1];
      }

      if (text[i + 2] !== undefined) {
        p.innerText += text[i + 1];
      }

      outputDiVEl.appendChild(p);
    }
  }
}