const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const databaseFile = process.argv[2];

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the /students endpoint
app.get('/students', (req, res) => {
  let responseText = 'This is the list of our students\n';
  
  countStudents(databaseFile)
    .then((result) => {
      responseText += result;
      res.send(responseText);
    })
    .catch((error) => {
      responseText += error.message;
      res.send(responseText);
    });
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
