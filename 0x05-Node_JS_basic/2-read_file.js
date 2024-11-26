const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const majorStudentsMap = {};
    const lines = data.split('\n')
      .slice(1)
      .filter((line) => line.length !== 0);
    for (const line of lines) {
      const firstname = line.split(',')[0];
      const major = line.split(',')[3];
      if (majorStudentsMap[major]) {
        majorStudentsMap[major].push(firstname);
      } else {
        majorStudentsMap[major] = [firstname];
      }
    }
    console.log(`Number of students: ${lines.length}`);
    const majors = Object.getOwnPropertyNames(majorStudentsMap);
    for (const major of majors) {
      console.log(`Number of students in FIELD: ${majorStudentsMap[major].length}. List: ${majorStudentsMap[major].join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}
module.exports = countStudents;
