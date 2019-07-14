function solve() {

   let addBtn = Array.from(document.querySelectorAll('.product-add')),
      checkout = document.querySelector('.checkout'),
      display = document.querySelector('textarea'),
      boughtItems = new Set(),
      totalPrice = 0;

   addBtn.forEach(btn => btn.addEventListener('click', addProduct));
   checkout.addEventListener('click', finish);


   function addProduct() {

      let parrent = this.parentElement,
         item = parrent.querySelector('.product-title'),
         price = parrent.querySelector('.product-line-price');

      boughtItems.add(item.textContent);
      totalPrice += Number(price.textContent)

      display.value += `Added ${item.textContent} for ${price.textContent} to the cart.\n`
   }

   function finish() {

      let boughtItemsArray = [...boughtItems];

      display.value += `You bought ${boughtItemsArray.join(', ')} for ${totalPrice.toFixed(2)}.`

      addBtn.forEach(btn => btn.removeEventListener('click', addProduct));
      checkout.removeEventListener('click', finish);
   }
}