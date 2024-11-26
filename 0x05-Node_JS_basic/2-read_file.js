const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n')
      .slice(1)
      .filter((line) => line.length !== 0)
      .map((line) => line.split(',')[0]);
    console.log(`Number of students in FIELD: ${lines.length}. List: ${lines.join(', ')}`);
  } catch (err) {
    console.error('Cannot load the database');
  }
}
module.exports = countStudents;
