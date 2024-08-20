const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const lines = data.trim().split('\n').slice(1);
      let responseText = `Number of students: ${lines.length}\n`;
      const fields = {};
      
      for (const line of lines) {
        const student = line.split(',');
        if (student.length < 4) continue; // Skip invalid lines
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }

      for (const field in fields) {
        if (field) {
          responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      
      resolve(responseText);
    });
  });
}

module.exports = countStudents;
