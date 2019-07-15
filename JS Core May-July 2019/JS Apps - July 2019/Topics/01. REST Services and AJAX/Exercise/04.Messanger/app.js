 function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json',
        submit = document.querySelector('#submit'),
        refresh = document.querySelector('#refresh'),
        textarea = document.querySelector('#messages');

    submit.addEventListener('click', submitInfo);
    refresh.addEventListener('click', refreshInfo);

    function submitInfo() {
        let name = document.querySelector('#author'),
            msg = document.querySelector('#content');

        if (name.value !== '' && msg.value !== '') {
            const msgInfo = {
                author: name.value,
                content: msg.value,

            },

                postData = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(msgInfo)
                };

            fetch(url, postData)
                .then(response => console.log(response.json()))
                .catch(err => console.log(err))
        }
        
        textarea.value === '' ?  textarea.value += `${name.value}: ${msg.value}` :  textarea.value += `\n${name.value}: ${msg.value}`;
        name.value = '';
        msg.value = '';
    }

    function refreshInfo() {
        fetch(url)
        .then(response => response.json())
        .then(json => printHistory(json))
    }

    function printHistory(json){

        let result = Object.values(json)
        .map(x => x = `${x.author}: ${x.content}`)
        .join('\n');

        textarea.value = result;
    }
}

attachEvents(); 