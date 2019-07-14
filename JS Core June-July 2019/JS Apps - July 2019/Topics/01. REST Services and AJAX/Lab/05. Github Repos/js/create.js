(function () {
    let span = document.createElement('span'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        button = document.createElement('button');
        ul = document.createElement('ul');

    label.setAttribute('for', 'input-text');
    label.textContent = 'GitHub username: ';

    input.setAttribute('type', 'text');
    input.setAttribute('id', 'input-text');

    button.textContent = 'Load Repos';

    span.appendChild(label);
    span.appendChild(input);

    document.body.appendChild(span);
    document.body.appendChild(button);
    document.body.appendChild(ul);
})();