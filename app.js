const express = require('express');
const sequelize = require('./config/db');
const bmshopRoutes = require('./routes/bmshopRoutes');

const app = express();
app.use(express.json());

// Use routes
app.use('/api', bmshopRoutes);

// Sync database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Error syncing database:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
