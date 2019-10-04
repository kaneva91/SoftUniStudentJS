function getInfo() {

    stopName = document.querySelector('#stopName'),
        ul = document.querySelector('#buses');


    input = document.querySelector('#stopId'),
        stopId = input.value;

    input.value = '';

    if (stopId !== '') {

        fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
            .then(response => checkStatus(response))
            .then(json => printResunt(json))
            .catch(error => {
                stopName.textContent = 'Error';
                ul.innerHTML = '';

            });
    }
    else {
        stopName.textContent = 'Error';
    }

    function checkStatus(response) {
        if (response.status !== 200) {
            throw new Error(response.status);
        }
        return response.json();
    }

    function printResunt(json) {
        stopName.textContent = json.name;

        Object.entries(json.buses)
            .forEach(pair => {
                let [bus, time] = pair;
                createListEntries(bus, time);
            });

    }
    function createListEntries(bus, time) {
        let li = document.createElement('li');
        li.textContent = `Bus ${bus} arrives in ${time} minutes`;

        ul.appendChild(li);
    }
}