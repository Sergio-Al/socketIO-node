class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // Starting main connection
    this.io.on("connection", (socket) => {
      // listening to event
      socket.on("messages-from-client", (data) => {
        console.log(`this is the data:
                 data: ${data}`);
        this.io.emit("response-to-message", data);
      });
    });
  }
}

module.exports = Sockets;
