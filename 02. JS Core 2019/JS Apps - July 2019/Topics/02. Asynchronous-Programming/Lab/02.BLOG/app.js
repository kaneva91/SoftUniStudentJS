function attachEvents() {
    let loadPostsButton = document.querySelector('#btnLoadPosts'),
        viewButton = document.querySelector('#btnViewPost'),

        dropDownMenu = document.querySelector('#posts'),

        articleHeading = document.querySelector('#post-title'),
        articleBody = document.querySelector('#post-body'),
        articleComments = document.querySelector('#post-comments'),

        articleBodies = {},

        dropDownFrament = document.createDocumentFragment(),
        commentsFragment = document.createDocumentFragment();


    //DropDown Menu Funcs
    const createDropDownOption = (id, title) => {
        let option = document.createElement('option');
        option.value = id;
        option.textContent = title;
        dropDownFrament.appendChild(option);
    }

    const fillDropDownMenu = (data) => {

        Object.entries(data)
            .forEach(element => {
                let [id, content] = element;
                createDropDownOption(id, content.title);
                articleBodies[content.title] = [content.body, content.id];
            });

        dropDownMenu.appendChild(dropDownFrament);
    }

    //View Post and Comments Funcs

    const createCommentsListItem = (comment) => {
        let li = document.createElement('li');
        li.value = comment.id;
        li.textContent = comment.text;

        commentsFragment.appendChild(li);
    };

    const displayComments = (comments) => {
        comments.forEach(comment => createCommentsListItem(comment));

        articleComments.appendChild(commentsFragment);
    };

    const dispayBody = (body) => {
        articleBody.textContent = body;
    };

    const displayHeading = (heading) => {
        articleHeading.textContent = heading;
    };

    const displayContent = (title, bodyAndId, allComments) => {
        let [titleBody, titleId] = bodyAndId;

        let comments = Object.values(allComments)
            .filter(x => x.postId === titleId);

        displayHeading(title);
        dispayBody(titleBody);
        displayComments(comments);
    }
    //Event Listeners
    loadPostsButton.addEventListener('click', () => {
        dropDownMenu.textContent = '';

        articleHeading.textContent = 'Post Details';
        articleBody.textContent = '';
        articleComments.textContent = '';

        fetch('https://blog-apps-c12bf.firebaseio.com/posts.json')
            .then(response => response.json())
            .then(data => fillDropDownMenu(data))
    });

    viewButton.addEventListener('click', () => {

        if (articleHeading.textContent !== 'Post Details') {
            articleHeading.textContent = '';
        }

        articleBody.textContent = '';
        articleComments.textContent = '';

        let selectedTitile = dropDownMenu[dropDownMenu.selectedIndex].textContent,
            titleBodyAndID = articleBodies[selectedTitile];

        fetch(`https://blog-apps-c12bf.firebaseio.com/comments.json`)
            .then(response => response.json())
            .then(comments => displayContent(selectedTitile, titleBodyAndID, comments))
    })
}

attachEvents();