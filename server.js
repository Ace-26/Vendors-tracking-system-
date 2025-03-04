const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (e.g., JS, CSS, etc.)
app.use(express.static(__dirname));

// Serve index.html for the main client
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/start', (req, res) => {
  res.sendFile(__dirname + '/start.html');
});
app.get('/receiver', (req, res) => {
  res.sendFile(__dirname + '/receiver.html');
});

// Serve receiver.html for the receiver client
app.get('/receiver', (req, res) => {
  res.sendFile(__dirname + '/receiver.html');
});

// Listen for clients to connect
io.on('connection', (socket) => {
  console.log('A client connected:', socket.id);

  // Listen for latitude and longitude data from a client
  socket.on('locationUpdate', (data) => {
    console.log(`Received location data from ${socket.id}:`, data);

    // Broadcast the data to all clients (including the sender)
    io.emit('locationUpdate', data);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Define the port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
