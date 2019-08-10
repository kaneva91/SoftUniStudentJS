function solve(input) {
    let text = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, ""); //Removes all punctuation signs and special caracters
    text = text.split(' ').filter(x => x!== "");
 
    longestWord(text);
    shortestWord(text);

    function longestWord(text) {
        let i,
            longest = text[0];

        for (i = 1; i < text.length; i += 1) {

            if (text[i].length > longest.length) {
                longest = text[i];
            }
        }
        console.log(`Longest -> ${longest}`);
    }

    function shortestWord(text) {
        let i,
            shortest = text[0];

        for (i = 1; i < text.length; i += 1) {

            if (text[i].length < shortest.length) {
                shortest = text[i];
            }
        }
        console.log(`Shortest -> ${shortest}`);
    }
}

solve('Hello people, are you familiar with the terms of application at the software university?');
solve('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');