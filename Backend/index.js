require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const jwt = require('jsonwebtoken');
const user = require('./models/user');
const authRoutes = require('./route/auth');
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
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
  const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
};
app.use('/auth', authRoutes);
app.get('/api/auth/user', authMiddleware, async (req, res) => {
  res.json({ user: req.user });
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Register.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access your application at http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Register.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


