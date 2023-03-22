const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri =
  'mongodb+srv://shokhrukh1212:mymongodbpassword@project-management.z3tzk8u.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log('Server started on port 8000');
  console.log('checking for new branch');
});
