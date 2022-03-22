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
  // emiting an event
  socket.emit("welcoming", {
    message: "Welcome to the server",
    currentDate: new Date().toISOString(),
  });

  // listening to events from client
  socket.on("client-sends", (data) => {
    console.log(`The client data is: 
      message: ${data.message},
      client: ${data.client}`);
  });
});

server.listen(8080, () => {
  console.log("server running on server 8080");
});
