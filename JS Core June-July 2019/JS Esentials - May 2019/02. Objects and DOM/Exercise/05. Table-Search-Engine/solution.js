function solve() {
   let dataBase = Array.from(document.querySelectorAll('tbody tr td'));

   let btn = document.querySelector('button');

   btn.addEventListener('click', searchEngine);

   function searchEngine() {

      let tableRows = Array.from(document.querySelectorAll('tbody tr'));
      tableRows.map(tr => tr.removeAttribute('class'));

      let searchElem = document.querySelector('#searchField');;

      if (searchElem.value !== '') {
         let searchItem = searchElem.value;
         searchElem.value = '';

         let pattern = new RegExp(searchItem, 'i')
         let result = dataBase.filter(x => pattern.exec(x.textContent))

         if (result.length > 0) {

            result.forEach(el => {
               let parent = el.parentElement;
               parent.setAttribute('class', 'select');
            });

         }
      }
   }
}