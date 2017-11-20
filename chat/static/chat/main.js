let socket;
(() => {

  let list_messages = document.querySelector("#list__messages");
  let message__user = document.querySelector("#message__user");

  socket = new WebSocket("ws://" + window.location.host + "/chat/");
  socket.onmessage = function(e) {
      let data = JSON.parse(e.data);
      let template_html = ` <p><strong>${data.username}</strong> <span class="badge badge-primary">RH</span>: ${data.message}</p>`;
      list_messages.insertAdjacentHTML('beforeend', template_html);
  }

  if (socket.readyState == WebSocket.OPEN) {
    socket.onopen();
  }

  message__user.addEventListener("keypress", (e) => {
    let key = e.which || e.keyCode;
    if (key === 13 && message__user.value !== '') {
        let message_struct = {
            message: message__user.value,
        }
      socket.send(JSON.stringify(message_struct));
      message__user.value = '';
    }
  })

})();
