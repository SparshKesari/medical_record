const testRouter = require('express').Router();
testRouter.get('/', (req, res) => {
  return res.send('Hi, from within the data router GET'); 
});
testRouter.post('/', (req, res) => {
  return res.send('Hi, from within the data router POST');
});
module.exports = testRouter;