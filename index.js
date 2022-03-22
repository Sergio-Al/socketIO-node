// express server
const express = require("express");
const app = express();

// socket server
const server = require("http").createServer(app);

// setting up socket server
const io = require("socket.io")(server);

// Serving the public directory
app.use(express.static(__dirname + "/public"));

// listening to events
io.on("connection", (socket) => {
    
  // listening to events from client
  socket.on("client-message", (data) => {
    console.log(`The client message is: 
      message: ${data.text}`);
    
    // io emit the event to all clients connected with socket
    io.emit("response-to-message", data)
  });
});

server.listen(8080, () => {
  console.log("server running on server 8080");
});
