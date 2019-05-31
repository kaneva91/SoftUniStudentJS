function solve() {

    let text = document.querySelector('#arr').value,
        result = document.querySelector('#result'),

        textArr = JSON.parse(text),

        pattern = /^([A-Z][a-z]*\s[A-Z][a-z]*)\s(\+359(\s|-)[0-9]\3\d{3}\3\d{3})\s([a-z0-9]+@[a-z]*.[a-z]{2,3})$/;

    textArr.forEach(line => {
        let match = line.match(pattern);

        if (match) {
            let [name, phone, email] = [match[1], match[2], match[4]],

                nameParagraph = document.createElement('p'),
                phoneParagraph = document.createElement('p'),
                emailParagraph = document.createElement('p');

            nameParagraph.textContent = `Name: ${name}`;
            phoneParagraph.textContent = `Phone Number: ${phone}`;
            emailParagraph.textContent = `Email: ${email}`;

            result.appendChild(nameParagraph);
            result.appendChild(phoneParagraph);
            result.appendChild(emailParagraph);
        }
        else {
            let invalidDataParagraph = document.createElement('p');
            invalidDataParagraph.textContent = 'Invalid data';
            result.appendChild(invalidDataParagraph);
        }

        let separator = document.createElement('p');
        separator.textContent = '- - -';
        result.appendChild(separator);
    });
}