require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const authRoutes = require('./route/auth');
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'../public')));
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
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access your application at http://localhost:${PORT}`);
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'Register.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// User Registration Route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// User Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'Register.html'));
// });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access your application at http://localhost:${PORT}`);
});
// app.get('/api/auth/user', authMiddleware, async (req, res) => {
//   res.json({ user: req.user });
// });
