import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */

Ws.io.on('connection', (socket) => {
    console.log("aaaa user Connected");
  socket.emit('welcome', "This is Socket Server ")

  socket.on("sendMessage", (msg) => {
    console.log("soketmsg",msg);
    Ws.io.emit("getMessage",msg);
  
  });
  
  socket.on("sendNotification", (msg) => {
    console.log("sendNotification",msg);
    Ws.io.emit("getNotification",msg);

  });

})
 