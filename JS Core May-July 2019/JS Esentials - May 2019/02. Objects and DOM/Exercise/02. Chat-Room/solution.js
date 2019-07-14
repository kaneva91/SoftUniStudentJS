function solve() {
   let btn = document.querySelector('button');

   btn.addEventListener('click', sendMessage);

   function sendMessage() {

      let msg = document.querySelector('#chat_input'),
         div = document.createElement('div');

      div.setAttribute('class', 'message my-message');
      div.textContent = msg.value;

      msg.value = "";

      let parrentDiv = document.querySelector('#chat_messages');

      parrentDiv.appendChild(div);
   }

}


