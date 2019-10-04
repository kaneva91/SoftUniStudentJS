function loadCommits() {
    let username = document.querySelector('#username').value,
        repo = document.querySelector('#repo').value,
        url = `https://api.github.com/repos/${username}/${repo}/commits`,
        fragment = document.createDocumentFragment(),
        ul = document.querySelector('#commits'),
        status = '',
        statusText = '';

    ul.textContent = '';

    const createListItemContent = (currCommit) => {
        let li = document.createElement('li');
        li.textContent = `${currCommit.commit.author.name}: ${currCommit.commit.message}`;
        fragment.appendChild(li);
    };
    const displayData = (data) => {
        if (status === 200) {
            data.filter(x => x.commit).forEach(commit => {
                createListItemContent(commit)
            });
        }

        else {
            let errorDisplayListItem = document.createElement('li');
            errorDisplayListItem.textContent = `${status} ${statusText}`;
            fragment.appendChild(errorDisplayListItem);
        }
        ul.appendChild(fragment);
    }

    fetch(url)
        .then(response => {
            status = response.status;
            statusText = response.statusText;
            return response.json()
        })
        .then(data => displayData(data))
}