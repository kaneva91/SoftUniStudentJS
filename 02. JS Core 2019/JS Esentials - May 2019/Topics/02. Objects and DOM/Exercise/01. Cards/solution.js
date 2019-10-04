function solve() {

   let cards = document.querySelectorAll('.cards img'),
      resultSpan = document.querySelectorAll('#result span'),
      history = document.querySelector('#history'),
      cardPlayer1,
      cardPlayer2;

   Array.from(cards).forEach(card => card.addEventListener('click', compare));

   function compare() {

      this.setAttribute('src', 'images/whiteCard.jpg')

      parrentElID = this.parentElement.getAttribute('id');

      if (parrentElID === 'player1Div') {

         resultSpan[0].textContent = this.getAttribute('name');
         cardPlayer1 = this;

      }
      else {
         resultSpan[2].textContent = this.getAttribute('name');
         cardPlayer2 = this;
      }

      let leftSpanValue = resultSpan[0].textContent,
         rightSpanValue = resultSpan[2].textContent;

      if (Number(leftSpanValue) && Number(rightSpanValue)) {

         if (Number(leftSpanValue) > Number(rightSpanValue)) {
            cardPlayer1.style.border = "2px solid green";
            cardPlayer2.style.border = "2px solid red";
         }
         else if (Number(leftSpanValue) < Number(rightSpanValue)) {
            cardPlayer1.style.border = "2px solid red";
            cardPlayer2.style.border = "2px solid green";
         }
         resultSpan[0].textContent = '';
         resultSpan[2].textContent = '';
         history.textContent += `[${cardPlayer1.getAttribute('name')} vs ${cardPlayer2.getAttribute('name')}] `;
         cardPlayer1 = '';
         cardPlayer1 = '';

      }
      this.removeEventListener('click', compare);
   }

}