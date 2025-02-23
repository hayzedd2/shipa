import { WebSocketServer } from 'ws';
import { type Server } from 'http';

let wss: WebSocketServer;

export function GET(req: Request) {
  // Get the server instance from the request
  const server = req as unknown as Server;
  
  if (!wss) {
    wss = new WebSocketServer({ server });
    
    wss.on('connection', (ws) => {
      console.log('Client connected');
      
      // Send package state updates every 4 seconds
      const sendUpdate = () => {
        const states = ["processed", "shipped", "in_transit", "delivered"];
        let currentIndex = 0;
        
        const interval = setInterval(() => {
          ws.send(JSON.stringify({
            type: 'stateUpdate',
            state: states[currentIndex]
          }));
          
          currentIndex = (currentIndex + 1) % states.length;
        }, 4000);
        
        ws.on('close', () => {
          clearInterval(interval);
        });
      };
      
      sendUpdate();
    });
  }
  
  return new Response('WebSocket server is running');
}