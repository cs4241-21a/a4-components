var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../schemas/users');

const loginCookieName = 'loginCookie';

function generateToken(user) {
  return jwt.sign({
    id: user.id,
    username: user.username,
  },
    process.env.JWT_SECRET,
    {
      expiresIn: '1 hour'
    });
}

// Login endpoints
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  try {

    const user = await User.findOne({ username });
    if (!user) {
      res.json({
        errors: { username: `User with username ${username} does not exist` },
        formData: { username }
      });
      return;
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      res.json({
        errors: { password: 'Password Does Not Match' },
        formData: { username }
      });
      return;
    }

    // login success
    res.cookie(loginCookieName, { userId: user._id }, { maxAge: 21600000 });
    res.json({
      status: 'success',
      userId: user._id, token: generateToken({
        id: user._id,
        username
      })
    });
  } catch (err){
    console.log(err);
    res.json({ errors: { error: 'error' } });
  }
});

// Github authentication
router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }),
  function (req, res) {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

// Github authentication callback
router.get("/login/oauth2/code/github",
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect(`/user/${req.user._id}`);
  });

router.get('/logout', (req, res, next) => {
  res.clearCookie(loginCookieName);
  req.logout();
  res.redirect('/login');
});

// Register Account endpoints
router.post('/register', async (req, res, next) => {
  const { username, password, confirmPassword } = req.body;
  let passwordHash;
  let newUser;

  if (password === confirmPassword) {
    passwordHash = await bcrypt.hash(password, 12);
  } else {
    res.json({
      formData: {username},
      errors: {password: `Passwords to not match`}
    });

    return;
  }

  const user = await User.findOne({ username });
  if (user) {
    res.json({
      formData: {username},
      errors: {password: `User with username ${username} already exists`}
    })
    return;
  }

  try {

    newUser = new User({
      username,
      passwordHash
    });

    // save to db
    newUser = await newUser.save();

  } catch (err) {
    console.log(err);
    res.json({ errors: 'error' });
    return;
  }

  // register success
  res.cookie(loginCookieName, { userId: newUser._id }, { maxAge: 21600000 });
  res.json({
    status: 'success',
    userId: newUser._id, 
    token: generateToken({
      id: newUser._id,
      username
    })
  });
});

module.exports = router;
