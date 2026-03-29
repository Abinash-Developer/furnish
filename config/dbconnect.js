const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const mongoURI = 'mongodb+srv://appskaswebtech_db_user:mgDYFpfp3tOa6JYf@cluster0.ius7lms.mongodb.net/furnish'; 
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected successfully!');
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1); 
  }
};
mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error after initial connection: ${err}`);
});
module.exports = connectDB;