const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.split('\n').filter(row => row.trim().length > 0);
    const header = rows.shift();

    if (!header) {
      throw new Error('Cannot load the database');
    }

    const studentsByField = {};

    rows.forEach(row => {
      const [firstname, , , field] = row.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    const totalStudents = rows.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsByField) {
      const students = studentsByField[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
