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
io.on("connection", () => {
  console.log("a new client has arrived!");
});

server.listen(8080, () => {
  console.log("server running on server 8080");
});
