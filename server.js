const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!',status:"Abinash swainss" });
});

// Your Routes here
// app.use('/api/users', require('./routes/users'));
// app.use('/api/products', require('./routes/products'));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 3120;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});