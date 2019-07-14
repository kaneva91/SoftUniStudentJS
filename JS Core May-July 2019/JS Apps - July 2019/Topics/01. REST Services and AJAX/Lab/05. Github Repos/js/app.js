window.onload = (function(){
    let input = document.querySelector('#input-text'),
    ul = document.querySelector('ul'),
    btn = document.querySelector('button');
   
    btn.addEventListener('click', eventHandler);


    function eventHandler(){
       if(input.value !== ''){
            const username = input.value;
            input.value = '';

            fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => isSuccessfullToBeParsed(response))
            .then(repos => printRepos(repos)); 
       }
    }



    function isSuccessfullToBeParsed(response){
        if(!response.status === 200){
            return;
        }
        return response.json();
    }
    
    function printRepos(repos){
      
       repos.forEach(repo => {
           appendToList(repo.owner.login, repo.html_url, repo.name);
           
       });
    }

    function appendToList(username, url, repoName){
        let li = document.createElement('li'),
        a = document.createElement('a');

        a.setAttribute('href', url);
        a.setAttribute('target', '_blank');
        a.textContent = `${username}/${repoName}`;

        li.appendChild(a);
        ul.appendChild(li)
    }
})