const express = require('express');
const sequelize = require('./config/db');
const bmshopRoutes = require('./routes/bmshopRoutes');
const productRoutes = require('./routes/bmshopRoutes');
const app = express();
// Middleware and body-parser setup
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Use routes
app.use('/api', bmshopRoutes);
app.use('/api', productRoutes);

// Sync database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Error syncing database:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
