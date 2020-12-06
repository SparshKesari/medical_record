const express = require('express');
const testRouter = require('./controllers/data');
const mongoose = require('mongoose');
//const phonesRouter = require('./controllers/phones');

mongoose.connect(
    'mongodb+srv://eeProject:eeProject@cluster0.czsmi.mongodb.net/userdata?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => {
       console.log('Connected to database');
     })
     .catch((err) => {
       console.log('Error connecting to DB', err.message);
     });
const app = express();
app.use('/api', testRouter);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});