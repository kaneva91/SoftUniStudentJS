function attachEvents() {
    let addBtn = document.querySelector('.add'),
        loadBtn = document.querySelector('.load');

    addBtn.addEventListener('click', addCatch);
    loadBtn.addEventListener('click', loadCatches);

    function addCatch() {
        let inputArray = Array.from(document.querySelector('#addForm').querySelectorAll('input')),

            [angler, weight, species, location, bait, captureTime] = inputArray.map(x => x = x.value);;

        if (angler !== '' && weight !== '' && species !== '' && location !== '' && bait !== '' && captureTime !== '') {
            let data = { angler, weight, species, location, bait, captureTime },

                body = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };

            fetch(`https://fisher-game.firebaseio.com/catches.json`, body)
                .then(res => {
                    if (res.status === 200) {
                        inputArray.map(x => x.value = '');
                        loadCatches();
                    }
                })
        }
    }

    function loadCatches() {
        fetch('https://fisher-game.firebaseio.com/catches.json')
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                return;
            })
            .then(data => displayCatches(data));
    }

    function displayCatches(data) {
        let catchesDiv = document.querySelector('#catches');
        catchesDiv.textContent = '';

        for (id in data) {
            let catchDiv = document.createElement('div'),
                catchInfo = data[id];

            catchDiv.className = 'catch';
            catchDiv.setAttribute('data-id', id);

            catchDiv.appendChild(createInputAndLabel('Angler', 'angler', catchInfo.angler, 'text')); //angler
            catchDiv.appendChild(createInputAndLabel('Weight', 'weight', catchInfo.weight, 'number')); //weight
            catchDiv.appendChild(createInputAndLabel('Species', 'species', catchInfo.species, 'text')); //species
            catchDiv.appendChild(createInputAndLabel('Location', 'location', catchInfo.location, 'text')); //location
            catchDiv.appendChild(createInputAndLabel('Bait', 'bait', catchInfo.bait, 'text')); //bait
            catchDiv.appendChild(createInputAndLabel('Capture Time', 'captureTime', catchInfo.captureTime, 'number')); //capture time

            catchDiv.appendChild(createButton('update', 'Update', updateCatch));
            catchDiv.appendChild(createButton('delete', 'Delete', deleteCatch));

            catchesDiv.appendChild(catchDiv);
        }
    }

    function updateCatch(ev) {
        let parentElement = ev.target.parentElement,
            id = parentElement.getAttribute('data-id'),

            [angler, weight, species, location, bait, captureTime] = Array.from(parentElement.querySelectorAll('input'))
                .map(x => x = x.value);

        weight = +weight;
        captureTime = +captureTime;

        let updatedInfo = { angler, weight, species, location, bait, captureTime }

        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => {
                if (res.status === 200) {
                    loadCatches()
                }
            });

    }
    function deleteCatch(ev) {
        let elementForDeletion = ev.target.parentElement,
            id = elementForDeletion.getAttribute('data-id');

        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.status === 200) {
                    loadCatches()
                }
            });
    }



    function createInputAndLabel(labelValue, classValue, inputValue, inputType) {
        let fragmet = document.createDocumentFragment(),
            label = document.createElement('label'),
            inputField = document.createElement('input'),
            hr = document.createElement('hr');

        label.textContent = labelValue;

        inputField.type = inputType;
        inputField.className = classValue;
        inputField.value = inputValue;

        fragmet.appendChild(label);
        fragmet.appendChild(inputField);
        fragmet.appendChild(hr);

        return fragmet;
    }

    function createButton(buttonClass, buttonValue, event) {
        let btn = document.createElement('button');
        btn.className = buttonClass;
        btn.textContent = buttonValue;

        btn.addEventListener('click', event);

        return btn;
    }
}

attachEvents();