const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT });

wss.on("connection", (ws) => {
  ws.on("error", console.error);
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      client.send(message.toString());
    });
  });

  console.log("New client connected!");
});
