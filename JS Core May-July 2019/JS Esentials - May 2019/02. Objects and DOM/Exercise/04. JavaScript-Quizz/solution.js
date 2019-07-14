function solve() {
  //display: block/none -> to switch the elements

  let answerButtons = Array.from(document.querySelectorAll('.quiz-answer'));
  let sections = Array.from(document.querySelectorAll('section')),
    correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'],
    counter = 0,
    answered,
    answer,
    countCorrectAnswers = 0;

  answerButtons.map(btn => btn.addEventListener('click', implementation));

  function implementation() {
    if (counter <= 1) {

      sections[counter].style.display = 'none';
      sections[counter + 1].style.display = 'block';
      counter++;

      answered = this.querySelector('.answer-text');
      answer = answered.textContent;

      if (correctAnswers.includes(answer)) {
        countCorrectAnswers++;
      }
    }

    else if (counter === 2) {
      sections[2].style.display = 'none';

      answered = this.querySelector('.answer-text');
      answer = answered.textContent;

      if (correctAnswers.includes(answer)) {
        countCorrectAnswers++;
      }

      let result = document.querySelector('#results');
      result.style.display = 'block';

      let resultBox = result.querySelector('.results-inner h1');

      if (countCorrectAnswers === 3) {
        resultBox.textContent = 'You are recognized as top JavaScript fan!';
      }
      else {
        resultBox.textContent = `You have ${countCorrectAnswers} right answers`
      }
    }

  }
}
