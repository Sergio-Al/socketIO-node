// express server
const app = require("express")();

// socket server
const server = require("http").createServer(app);

// setting up socket server
const io = require("socket.io")(server);

// listening to events
io.on("connection", () => {
  /* */
});

server.listen(8080, () => {
  console.log("app running on server 8080");
});
