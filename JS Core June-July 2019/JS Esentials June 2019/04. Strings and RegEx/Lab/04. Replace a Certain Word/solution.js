function solve() {
    let replaceWord = document.querySelector('#word').value,
        text = document.querySelector('#text').value,

        resultEl = document.querySelector('#result'),

        textArray = JSON.parse(text);
       
    let toBeReplaced = textArray[0].split(' ')[2];

  
     textArray.forEach(line => {
        let output = line.replace(new RegExp(toBeReplaced, 'gi'), replaceWord);
        console.log(output);
        
        let p = document.createElement('p');
        p.textContent = output;
        resultEl.appendChild(p); 
    });
}