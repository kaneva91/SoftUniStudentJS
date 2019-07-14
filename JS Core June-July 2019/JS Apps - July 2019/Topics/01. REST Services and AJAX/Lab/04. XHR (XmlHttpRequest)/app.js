window.onload = (function () {
    let a = document.createElement('button');

    a.textContent = 'Load Repos';

    a.addEventListener('click', handleClik);

    document.body.appendChild(a);



    function handleClik() {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = handleResponse;

        xhr.open('GET', 'https://api.github.com/users/testnakov/repos', true);

        xhr.send();
    }

    function handleResponse() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response);

            let p = document.createElement('p');

            p.textContent = JSON.stringify(response);

            document.body.appendChild(p);

        }
    }
});

