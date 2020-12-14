const express = require('express');
const testRouter = require('./controllers/data');
const mongoose = require('mongoose');
const decodeIDToken = require('./authenticateToken');
const cors = require('cors');
//const phonesRouter = require('./controllers/phones');
const app = express();
mongoose.connect(
    'mongodb+srv://eeProject:eeProject@cluster0.czsmi.mongodb.net/userdata?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => {
       console.log('Connected to database');
     })
     .catch((err) => {
       console.log('Error connecting to DB', err.message);
     });

app.use('/api', testRouter);
app.use(decodeIDToken);
app.use(cors());
app.use(express.json());
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});