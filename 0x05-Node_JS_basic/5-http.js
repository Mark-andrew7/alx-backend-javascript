const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to read the CSV file and process students data
const countStudents = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      const fields = {};
      for (const line of lines) {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }

      let result = `Number of students: ${lines.length}\n`;
      for (const field in fields) {
        if (field) {
          result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      resolve(result.trim());
    });
  });
};

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    const dbPath = process.argv[2];
    if (!dbPath) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database\n');
      return;
    }

    try {
      const studentList = await countStudents(dbPath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentList}\n`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`${error.message}\n`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
