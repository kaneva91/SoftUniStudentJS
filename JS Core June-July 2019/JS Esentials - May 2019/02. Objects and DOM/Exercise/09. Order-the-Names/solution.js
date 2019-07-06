function solve() {

    let addBtn = document.querySelector('button');

    addBtn.addEventListener('click', addName);

    function addName() {
        let name = document.querySelector('input');
            name = name.value.toLowerCase();
        if (name !== '') {
            listEl = document.querySelectorAll('li');

            let n = name.charCodeAt(0),

            nameImput = name.charAt(0).toUpperCase() + name.slice(1),//capitalize first letter

                liContent = listEl[n - 97].textContent;

            if (liContent === '') {
                listEl[n - 97].textContent = nameImput;
            }
            else {
                listEl[n - 97].textContent += `, ${nameImput}`;
            }
        }
    }
}