const testRouter = require('express').Router();
const Data = require('../models/data');

testRouter.get('/', async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const data = await Data.find({});
    return res.json(data.map((data) => data.toJSON()));
  }
  return res.status(403).send('Not authorized');
});

testRouter.post('/', (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    console.log('authenticated!', auth);
    return res.send('Hi, from within the data router POST');
  }
  return res.status(403).send('Not authorized')
});

module.exports = testRouter;