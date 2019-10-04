function solve() {

  //TODO...

  let anchors = document.getElementsByTagName('a');

  for (i = 0; i < anchors.length; i += 1) {

    anchors[i].addEventListener('click', (e) => {

      let text = e.currentTarget.nextElementSibling.textContent,
        clicks = Number(/[0-9]+/.exec(text)[0]);

      e.currentTarget.nextElementSibling.textContent = `visited ${clicks + 1} times`;

    });
  }
}