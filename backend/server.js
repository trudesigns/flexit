const express = require('express'); // did double quotes change after saving?
const mongoose = require('mongoose');
require('dotenv').config({ path: './variables.env' });

// models
const Exercise = require('./models/Exercise');
const User = require('./models/User');

const PORT = process.env.PORT || 4444;

//connect to db (add these lines)
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

const app = express();

app.listen(PORT, () => {
  console.log(`My Server listening on PORT ${PORT}`);
});
