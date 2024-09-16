const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
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

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
