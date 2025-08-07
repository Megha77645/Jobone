// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });
// const User = mongoose.model('User', userSchema);
// module.exports = User;
// models/User.js
// const mongoose = require('mongoose');

import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);

import express from 'express';
import bcrypt from 'bcrypt';
// models/User.js
// This file defines the User model schema for MongoDB using Mongoose.

