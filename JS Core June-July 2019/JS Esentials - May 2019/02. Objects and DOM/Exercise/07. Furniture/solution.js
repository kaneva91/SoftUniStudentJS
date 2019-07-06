function solve() {
  let textAreas = Array.from(document.querySelectorAll('textarea')),
    btns = Array.from(document.querySelectorAll('button')),
    generateBtn = btns[0],
    buyBtn = btns[1];


  generateBtn.addEventListener('click', generateFurniture);
  buyBtn.addEventListener('click', buyItems);


  function generateFurniture() {

    let input = textAreas[0].value,
      inputArray = JSON.parse(input);

    let table = document.querySelector('tbody');

    inputArray.forEach(element => {

      let tableRow = document.createElement('tr'),
        image = document.createElement('td'),
        imgTag = document.createElement('img');

      imgTag.setAttribute('src', element['img']);
      image.appendChild(imgTag);
      tableRow.appendChild(image);

      let name = document.createElement('td');
      name.textContent = element['name'];
      tableRow.appendChild(name);

      let price = document.createElement('td');
      price.textContent = element['price'];
      tableRow.appendChild(price);

      let decFactor = document.createElement('td');
      decFactor.textContent = element['decFactor'];
      tableRow.appendChild(decFactor);

      let check = document.createElement('td'),
        chekMark = document.createElement('input');
      chekMark.setAttribute('type', 'checkbox');
      check.appendChild(chekMark);
      tableRow.appendChild(check);

      table.appendChild(tableRow);
    });
  }

  function buyItems() {
    let checkboxes = Array.from(document.querySelectorAll('input')),
      markedCheckboxes = checkboxes.filter(x => x.checked);

    let boughtItems = [],
      totalPrice = 0,
      avgDec = 0;

    markedCheckboxes.forEach(checkbox => {
      let parrentofAll = checkbox.parentElement.parentElement;
      let allChildren = parrentofAll.children

      boughtItems.push(allChildren[1].textContent);
      totalPrice += Number(allChildren[2].textContent);
      avgDec += Number(allChildren[3].textContent);
    })

    let output = textAreas[1];

    output.value += `Bought furniture: ${boughtItems.join(', ')}\n`
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`
    output.value += `Average decoration factor: ${(avgDec / boughtItems.length)}`
  }
}