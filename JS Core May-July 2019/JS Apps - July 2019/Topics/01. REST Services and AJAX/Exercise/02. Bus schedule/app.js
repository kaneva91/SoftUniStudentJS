function solve() {
    let currentId = 'depot',
       
    currentStop = '',
        departBtn = document.querySelector('#depart'),
        arrivetBtn = document.querySelector('#arrive'),
        info = document.querySelector('.info');

    function depart() {
        departBtn.disabled = true;
        arrivetBtn.disabled = false;

        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(response => response.json())
            .then(json => {
                currentStop = json.name;
                info.textContent = `Next stop ${currentStop}`;
                currentId = json.next;
            })
    }

    function arrive() {
        departBtn.disabled = false;
        arrivetBtn.disabled = true;

        info.textContent = `Arriving at ${currentStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();