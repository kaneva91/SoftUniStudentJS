function growingWord() {

  let paragraph = document.querySelector('#exercise p');


  if (!paragraph.style.color) {
    paragraph.style.color = 'blue'; //blue
    paragraph.style.fontSize = '2px'; // shouldbe 2px initially 
  }

  else if (paragraph.style.color === 'blue') { // if blue -> to red
    paragraph.style.color = 'green';
    let size = parseInt(paragraph.style.fontSize);
    paragraph.style.fontSize = `${size * 2}px`;
  }

  else if (paragraph.style.color === 'green') { // if red -> to green
    paragraph.style.color = 'red';
    let size = parseInt(paragraph.style.fontSize);
    paragraph.style.fontSize = `${size * 2}px`;
  }

  else if (paragraph.style.color === 'red') { // if green -> to blue
    paragraph.style.color = 'blue';
    let size = parseInt(paragraph.style.fontSize);
    paragraph.style.fontSize = `${size * 2}px`;
  }
}