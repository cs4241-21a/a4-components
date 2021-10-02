var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../schemas/users');
const Task = require('../schemas/tasks');
const { createDeadline } = require('../util');
const { checkAuth, verifyToken } = require('../middleware');

// router.get('/get-login-cookie', (req, res, next) => {
//   console.log('GET Login Cookie');
//   if (req.cookies.loginCookie)
//     res.json(req.cookies.loginCookie);
//   else
//     res.json({ userId: req.user._id });
// });

router.post('/check-auth', async (req, res, next) => {
  console.log("POST check auth");

  const gitauth = req.isAuthenticated();

  const { token } = req.body;
  const tokenStuff = verifyToken(token);

  // not logged in
  if (!tokenStuff && !gitauth) {
    res.json({ errors: { login: 'Not logged in' } })
    return;
  } else if (!tokenStuff && gitauth) {

    res.json({
      token: jwt.sign({
        id: req.user._id,
        username: req.user.username,
      },
        process.env.JWT_SECRET,
        {
          expiresIn: '1 hour'
        })
    });
    return;
  }

  res.json({ auth: true });
});

router.post('/exists', async (req, res, next) => {
  console.log("POST exists");
  const { id } = req.body;
  console.log(req.body);
  const user = await checkUserExists(id, res);
  if (!user) return;

  res.json({ exists: true });
});


// Get the tasks list page to a user with id
router.post('/:id', async function (req, res, next) {
  const id = req.params.id;
  let tasks;
  console.log('GET user');

  const user = await checkUserExists(id, res);

  if (!user) {
    res.json({ errors: { error: { tasks: 'User does not exist' } } });
    return;
  }

  if (!req.body.token && !verifyToken(req.body.token)) {
    res.json({ errors: { login: 'Not logged in' } });
    return;
  }

  try {

    tasks = await Task.find({ owner: id });

  } catch (err) {
    console.log(err);
    res.json({ errors: { error: { tasks: 'Error getting tasks' } } });
    return;
  }

  // sort based on priority
  tasks.sort((elem1, elem2) => {
    if (elem1.priority > elem2.priority) {
      return -1;
    } else if (elem1.priority === elem2.priority) {
      return 0;
    } else {
      return 1;
    }
  });

  res.json(tasks);
});

// Submit a task from a user
router.post('/:id/submit', async (req, res, next) => {
  const id = req.params.id;

  const user = await checkUserExists(id, res);

  if (!user) {
    res.json({ errors: { error: { tasks: 'User does not exist' } } });
    return;
  }

  if (!req.body.token && !verifyToken(req.body.token)) {
    res.json({ errors: { login: 'Not logged in' } });
    return;
  }

  try {
    const data = req.body;

    // Check if task title is duplicate
    let dupe = false;
    const dupes = await Task.find({ owner: id, title: data.title });
    if (dupes.length > 0) {
      const resData = { error: 'Duplicate Task titles not allowed' };
      res.json(resData);
      return;
    }

    if (dupe)
      return;

    let newTask = new Task({
      title: data.title,
      description: data.description,
      priority: data.priority,
      dateCreated: data.dateCreated,
      deadline: createDeadline(data.dateCreated, data.priority),
      owner: id
    });

    // save to db
    newTask = await newTask.save();

    let tasks = await Task.find({ owner: id });

    res.json(tasks);

  } catch (err) {
    console.error(err);
  }
});

// Edit a user's task
router.post('/:id/edit', async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  const user = await checkUserExists(id, res);

  if (!user) {
    res.json({ errors: { error: { tasks: 'User does not exist' } } });
    return;
  }

  if (!req.body.token && !verifyToken(req.body.token)) {
    res.json({ errors: { login: 'Not logged in' } });
    return;
  }

  // Upate the task
  const oldTask = await Task.findOne({ title: data.oldTitle });

  await Task.updateOne({ title: data.oldTitle },
    {
      title: data.newTitle,
      description: data.description,
      priority: data.priority,
      deadline: createDeadline(oldTask.dateCreated, data.priority)
    });

  const tasks = await Task.find({ owner: id })

  res.json(tasks);
});

// Delete a task for a user
router.post('/:id/delete', async (req, res, next) => {

  const id = req.params.id;
  const user = await checkUserExists(id, res);

  if (!user) {
    res.json({ errors: { error: { tasks: 'User does not exist' } } });
    return;
  }

  if (!req.body.token && !verifyToken(req.body.token)) {
    res.json({ errors: { login: 'Not logged in' } });
    return;
  }

  try {
    const data = req.body;

    // Delete task
    await Task.deleteOne({ title: data.title, owner: id });

    let tasks = await Task.find({ owner: id });

    res.json(tasks);
  } catch (err) {
    console.error(err);
  }

});


const checkUserExists = async (id, res) => {
  console.log(id);
  try {
    const user = await User.findById(id);
    if (!user) {
      console.log('error1')
      res.json({ errors: { user: `User with id: ${id} does not exist` } });
      return;
    }

    return user;
  } catch (err) {
    console.log('error2')
    res.json({ errors: { user: `Cannot find user with id: ${id}` } });
    return;
  }
}

module.exports = router;
