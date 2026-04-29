const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/dbconnect');
const {varifiedUser} = require('./middleware/authMiddleware');
require('dotenv').config();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Basic Route 

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!',status:"Abinash Banda" });
});

// Your Routes here
app.post('/api/varify-user',varifiedUser);
app.use('/api/users', require('./routes/users'));
app.use('/api/category', require('./routes/category'));
app.use('/api/color', require('./routes/color'));
app.use('/api/products', require('./routes/product'));
  
// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 3120;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});