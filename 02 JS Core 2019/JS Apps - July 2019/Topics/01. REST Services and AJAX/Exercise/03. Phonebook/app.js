function attachEvents() {
    let loadBtn = document.querySelector('#btnLoad'),
        createBtn = document.querySelector('#btnCreate'),
        ul = document.querySelector('#phonebook')

    loadBtn.addEventListener('click', loadPhonebok);
    createBtn.addEventListener('click', createContact);

    function loadPhonebok() {
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
            .then(response => response.json())
            .then(json => loadContacts(json))
            .catch(err => console.log(err));
    }

    function createContact() {
        let person = document.querySelector('#person'),
            phone = document.querySelector('#phone');

        if (person.value !== '' && phone.value !== '') {
            const personInfo = {
                person: person.value,
                phone: phone.value
            },

                postData = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(personInfo)
                };

            fetch('https://phonebook-nakov.firebaseio.com/phonebook.json', postData)
                .then(response => (response.json()))
                .then(json => appendContact(json, personInfo))

            person.value = '';
            phone.value = '';
        }
    }

    function loadContacts(json) {
        if (json === null) {
            return;
        }
        ul.textContent = '';

        Object.entries(json)
            .forEach(element => {
                let [id, contactInfo] = element;
                appendContact(id, contactInfo)
            });
    }

    function appendContact(id, contactIfno) {
        let li = document.createElement('li'),
            deleteBtn = document.createElement('button');

        li.textContent = `${contactIfno.person}: ${contactIfno.phone}`;

        deleteBtn.textContent = 'Delete';
        deleteBtn.id = id;
        deleteBtn.addEventListener('click', deleteContact);

        li.appendChild(deleteBtn)
        ul.appendChild(li);
    }

    function deleteContact() {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${this.id}.json`,
            {
                method: 'DELETE'
            })
            .catch(err => console.log(err));

        this.parentElement.remove();
    }
}

attachEvents();
