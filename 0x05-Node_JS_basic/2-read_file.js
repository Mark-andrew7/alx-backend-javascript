const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n');
    if (lines.length ===0) {
      throw new Error('Cannot load the database');
    }
    const header = lines[0].split(',');
    const students = lines.slice(1);

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
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
