// express server
const express = require("express");

// socket server
const http = require("http");

const socketio = require("socket.io");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;

    // Creating an HTTP server
    this.server = http.createServer(this.app);

    // setting up socket server
    this.io = socketio(this.server, {
      /* conf options */
    });
  }

  middlewares() {
    // Serving the public directory
    this.app.use(express.static(path.resolve(__dirname, "..", "public")));
  }

  settingSockets() {
      // future code...
  }

  execute() {
    // starting up middlewares
    this.middlewares();

    // starting sockets
    this.settingSockets();

    // starting server
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;