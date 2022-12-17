let socket;

let username = localStorage.getItem('username');
function promptUsername(socket) {
  const msg = "Quel est ton nom d'utilisateur ?";
  let tempName;

  if (username == null) tempName = prompt(msg);
  else tempName = prompt(msg, username);

  if (tempName != null && tempName.length > 0 && tempName != username) {
    username = tempName;
    localStorage.setItem('username', tempName);
    if (socket != null) return socket.emit('username change', tempName);
  }
  console.log(tempName);
}

// socket = io({
//   query: { username: username },
//   upgrade: false,
// });
