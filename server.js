const { WebSocketServer } = require("ws");
const { createServer } = require("http");

const server = createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");
  const states= [
    "processed",
    "transit",
    "arrived",
    "out_for_delivery",
    "delivered",
  ];
  let currentIndex = 1;

  const interval = setInterval(() => {
    ws.send(
      JSON.stringify({
        type: "stateUpdate",
        state: states[currentIndex],
      })
    );

    currentIndex = (currentIndex + 1) % states.length;
  }, 4000);

  ws.on("close", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });
});

server.listen(3001, () => {
  console.log("WebSocket server running on ws://localhost:3001");
});
