function solve() {
    let input = document.querySelector('#text').value,
        parts = document.querySelector('#number').value,
        result = document.querySelector('#result'),

        sequences = input.match(new RegExp('.{1,' + parts + '}', 'g')); // divide string to a parts

    if (input.length % +parts !== 0) {//fill in the last sequence
        let lastSeq = sequences[sequences.length - 1].split(''),
            length = +parts - lastSeq.length;

        for (i = 0; i < length; i += 1) {
            lastSeq.push(input[i]);
        }
        sequences[sequences.length - 1] = lastSeq.join('');

    }

    console.log(input);
    result.textContent = sequences.join(' ');
}