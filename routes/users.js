const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const router = express.Router();   







// Register a new user
router.post('/register', (req, res) => {
  User.register(new User({ email: req.body.email, role: 'user' }), req.body.password, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    // Log the new user in (Passport will create a session) using the local strategy
    passport.authenticate('local')(req, res, () => {
      req.session.role = req.user.role || 'guest'
      res.sendStatus(200)
    });
  });
});

// Login an existing user
router.post('/login', passport.authenticate('local'), (req, res) => {
  req.session.role = req.user.role || 'guest'
  res.sendStatus(200)
});

// Logout the current user
router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200)
});

module.exports = router;