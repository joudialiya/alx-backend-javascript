const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const majorStudentsMap = {};
    const lines = data
      .trim()
      .split('\n')
      .slice(1);
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
      console.log(`Number of students in ${major}: ${majorStudentsMap[major].length}. List: ${majorStudentsMap[major].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
// countStudents("database.csv")
module.exports = countStudents;
