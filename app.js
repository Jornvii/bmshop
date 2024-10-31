const express = require('express');
const sequelize = require('./config/db');
const bmshopRoutes = require('./routes/bmshopRoutes');
const productRoutes = require('./routes/bmshopRoutes');
const path = require('path');
const app = express();
const WebSocket = require('ws');
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });
// Broadcast function to send messages to all connected clients
function broadcast(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}
// Middleware and body-parser setup
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Use routes
app.use('/api', bmshopRoutes);
app.use('/api', productRoutes);

// Serve static img
app.use('/uploads/images', express.static(path.join(__dirname, 'uploads/images')));
// Sync database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Error syncing database:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
