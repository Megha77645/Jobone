require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const MONGODB_URI = process.env.MONGODB_URI;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Exit the process if the database connection fails
    process.exit(1);
  });
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
