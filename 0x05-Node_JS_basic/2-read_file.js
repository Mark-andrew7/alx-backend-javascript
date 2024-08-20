const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the data into lines
    const lines = data.trim().split('\n');

    // Check if there are no students (empty file or invalid file)
    if (lines.length ===0) {
      throw new Error('Cannot load the database');
    }

    // Parse the header and the rest of the data
    const header = lines[0].split(',');
    const students = lines.slice(1);

    // Initialize counters and lists
    let totalStudents = 0;
    const fieldMap = {};

    students.forEach(student => {
      const [firstName, lastName, age, field] = student.split(',');

      if (firstName && lastName && age && field) {
        totalStudents += 1;
        if (!fieldMap[field]) {
          fieldMap[field] = [];
        }
        fieldMap[field].push(firstName);
      }
    });

    // Output the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Output the number of students per field
    for (const [field, names] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
