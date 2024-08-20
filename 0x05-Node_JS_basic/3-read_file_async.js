const fs = require('fs').promises;

async function countStudents(filepath) {
  try {
    const data = await fs.readFile(filepath, 'utf8');
    const lines = data.trim().split('\n');
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }
    const header = lines[0].split(',');
    const students = lines.slice(1);

    const fields = {};
    let totalStudents = 0;

    for (const line of students) {
      const student = line.split(',');
      if (student.length === 4 && student[3]) {
        totalStudents += 1;
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
    return Promise.resolve();

  } catch (err) {
    console.log(`Error: ${err.message}`);
    return Promise.reject(err);
  }
}

module.exports = countStudents;
